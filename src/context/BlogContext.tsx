import { ReactNode, useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'
import { API } from '../lib/axios'
import { User } from '../dtos/user'
import { Post } from '../dtos/post'

interface BlogContextType {
	user: User
	fetchUser: () => Promise<void>
	fetchPosts: (query?: string) => Promise<Post[]>
	fetchPost: (id: number | string) => Promise<Post>
}

interface BlogProviderProps {
	children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
	const [user, setUser] = useState({} as User)

	const fetchUser = useCallback(async () => {
		const response = await API.get(
			`/users/${process.env.REACT_APP_GITHUB_USER}`,
		)

		setUser(response.data)
	}, [])

	const fetchPosts = useCallback(async (query?: string) => {
		const response = await API.get(
			`/repos/${process.env.REACT_APP_GITHUB_USER}/${process.env.REACT_APP_GITHUB_REPO}/issues`,
			{
				params: {
					per_page: 2,
					page: 1,
					q: query || null,
				},
			},
		)

		return response.data
	}, [])

	const fetchPost = useCallback(async (id: number | string) => {
		const response = await API.get(
			`/repos/${process.env.REACT_APP_GITHUB_USER}/${process.env.REACT_APP_GITHUB_REPO}/issues/${id}`,
		)

		return response.data
	}, [])

	return (
		<BlogContext.Provider value={{ user, fetchUser, fetchPosts, fetchPost }}>
			{children}
		</BlogContext.Provider>
	)
}
