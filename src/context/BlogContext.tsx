import { ReactNode, useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import { createContext } from 'use-context-selector'

import { env } from '@/env'

import { Post } from '../dtos/post'
import { User } from '../dtos/user'
import { API } from '../lib/axios'

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
	loadingPosts: boolean
	onChangeSearch: (status: boolean) => void
	changedSearch: boolean
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
	const [changedSearch, setChangedSearch] = useState(false)
	const [loadingPosts, setLoadingPosts] = useState(true)

	const fetchUser = useCallback(async () => {
		const response = await API.get(`/users/${env.VITE_GITHUB_USER}`)

		setUser(response.data)
	}, [])

	const fetchPosts = useCallback(async (query?: string, page?: number) => {
		setLoadingPosts(true)

		await API.get('/search/issues', {
			params: {
				q: `${query || ''} repo:${env.VITE_GITHUB_USER}/${env.VITE_GITHUB_REPO}`,
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
			.finally(() => {
				setLoadingPosts(false)
				setChangedSearch(false)
			})
	}, [])

	const fetchPost = useCallback(async (id: number | string) => {
		const response = await API.get(
			`/repos/${env.VITE_GITHUB_USER}/${env.VITE_GITHUB_REPO}/issues/${id}`,
		)

		return response.data
	}, [])

	const onResetPagination = useCallback(() => {
		setResetPagination((prev) => prev + 1)
	}, [])

	const onChangeSearch = useCallback((status: boolean) => {
		setChangedSearch(status)
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
				loadingPosts,
				onChangeSearch,
				changedSearch,
			}}
		>
			{children}
		</BlogContext.Provider>
	)
}
