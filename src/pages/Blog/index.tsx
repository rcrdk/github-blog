import { useEffect, useState } from 'react'
import { FormFilter } from './components/FormFilter'
import { PostItem } from './components/Post'
import { UserCard } from './components/User'
import { PostsEmpty, PostsListContainer, PostsPagination } from './styles'
import { useContextSelector } from 'use-context-selector'
import { BlogContext } from '../../context/BlogContext'

export function Blog() {
	const [nextPage, setNextPage] = useState(2)
	const [loadingNextPage, setLoadingNextPage] = useState(false)

	const { posts, fetchPosts, allowLoadMore, resetPagination } =
		useContextSelector(BlogContext, (context) => {
			return {
				posts: context.posts,
				fetchPosts: context.fetchPosts,
				allowLoadMore: context.allowLoadMore,
				resetPagination: context.resetPagination,
			}
		})

	async function handleLoadMorePosts() {
		setLoadingNextPage(true)

		await fetchPosts('', nextPage).finally(() => {
			setLoadingNextPage(false)
		})

		setNextPage((prev) => prev + 1)
	}

	useEffect(() => {
		fetchPosts('', 1)
	}, [fetchPosts])

	useEffect(() => {
		setNextPage(2)
	}, [resetPagination])

	return (
		<>
			<UserCard />
			<FormFilter />

			<PostsListContainer>
				{posts &&
					posts.map((item) => <PostItem data={item} key={item.number} />)}

				{posts.length === 0 && (
					<PostsEmpty>Nenhuma publicação encontrada.</PostsEmpty>
				)}
			</PostsListContainer>

			{allowLoadMore && (
				<PostsPagination
					type="button"
					onClick={handleLoadMorePosts}
					disabled={loadingNextPage}
				>
					Carregar mais publicações
				</PostsPagination>
			)}
		</>
	)
}
