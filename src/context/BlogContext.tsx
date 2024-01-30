import { ReactNode, useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'
import { API } from '../lib/axios'
import { User } from '../dtos/user'
import { Post } from '../dtos/post'
import toast from 'react-hot-toast'

interface BlogContextType {
	user: User
	posts: Post[]
	fetchUser: () => Promise<void>
	fetchPosts: (query?: string, page?: number) => Promise<void>
	fetchPost: (id: number | string) => Promise<Post>
	totalPosts: number
	allowLoadMore: boolean
	resetPagination: number
	onResetPagination: () => void
}

interface BlogProviderProps {
	children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
	const [user, setUser] = useState({} as User)
	const [posts, setPosts] = useState<Post[]>([])
	const [totalPosts, setTotalPosts] = useState(0)
	const [allowLoadMore, setAllowLoadMore] = useState(false)
	const [resetPagination, setResetPagination] = useState(0)

	const fetchUser = useCallback(async () => {
		const response = await API.get(
			`/users/${process.env.REACT_APP_GITHUB_USER}`,
		)

		setUser(response.data)
	}, [])

	const fetchPosts = useCallback(async (query?: string, page?: number) => {
		await API.get('/search/issues', {
			params: {
				q: `${query || ''} repo:${process.env.REACT_APP_GITHUB_USER}/${process.env.REACT_APP_GITHUB_REPO}`,
				per_page: 6,
				page,
			},
		})
			.then((response) => {
				setPosts((prev) => {
					if (page === 1) {
						return response.data.items
					} else {
						return [...prev, ...response.data.items]
					}
				})

				setTotalPosts(response.data.total_count)

				setAllowLoadMore(
					response.headers.link &&
						// eslint-disable-next-line no-useless-escape
						response.headers.link.includes(`rel=\"next\"`),
				)
			})
			.catch((err) => {
				console.error('ERR::', err.message)
				toast('Erro ao carregar publicações. Verifique o log no console.', {
					icon: '☠️',
				})
			})
	}, [])

	const fetchPost = useCallback(async (id: number | string) => {
		const response = await API.get(
			`/repos/${process.env.REACT_APP_GITHUB_USER}/${process.env.REACT_APP_GITHUB_REPO}/issues/${id}`,
		)

		return response.data
	}, [])

	const onResetPagination = useCallback(() => {
		setResetPagination((prev) => prev + 1)
	}, [])

	return (
		<BlogContext.Provider
			value={{
				user,
				posts,
				fetchUser,
				fetchPosts,
				fetchPost,
				totalPosts,
				allowLoadMore,
				resetPagination,
				onResetPagination,
			}}
		>
			{children}
		</BlogContext.Provider>
	)
}
