import { useEffect, useState } from 'react'
import { FormFilter } from './components/FormFilter'
import { PostItem } from './components/Post'
import { UserCard } from './components/User'
import { PostsListContainer } from './styles'
import { useContextSelector } from 'use-context-selector'
import { BlogContext } from '../../context/BlogContext'
import { Post } from '../../dtos/post'

export function Blog() {
	const [posts, setPosts] = useState<Post[]>([])

	const fetchPosts = useContextSelector(BlogContext, (context) => {
		return context.fetchPosts
	})

	useEffect(() => {
		fetchPosts()
			.then((res) => setPosts(res))
			.catch((err) => {
				console.log('ERR:: ', err)
			})
	}, [fetchPosts])

	return (
		<>
			<UserCard />
			<FormFilter />

			<PostsListContainer>
				{posts.map((item) => (
					<PostItem data={item} key={item.number} />
				))}
			</PostsListContainer>
		</>
	)
}
