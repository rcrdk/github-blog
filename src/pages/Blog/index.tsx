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

	const {
		posts,
		fetchPosts,
		allowLoadMore,
		resetPagination,
		loadingPosts,
		changeSearch,
	} = useContextSelector(BlogContext, (context) => {
		return {
			posts: context.posts,
			fetchPosts: context.fetchPosts,
			allowLoadMore: context.allowLoadMore,
			resetPagination: context.resetPagination,
			loadingPosts: context.loadingPosts,
			changeSearch: context.changedSearch,
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

	function renderPosts() {
		if (
			(loadingPosts && posts.length === 0) ||
			(loadingPosts && changeSearch)
		) {
			return Array.from({ length: 6 }).map((_, index) => (
				<PostItem data="skeleton" key={index} />
			))
		}

		if (posts.length === 0 && !loadingPosts) {
			return <PostsEmpty>Nenhuma publicação encontrada.</PostsEmpty>
		}

		return (
			<>
				{posts.map((item) => (
					<PostItem data={item} key={item.number} />
				))}

				{loadingPosts &&
					posts.length > 0 &&
					Array.from({ length: 6 }).map((_, index) => (
						<PostItem data="skeleton" key={index} />
					))}
			</>
		)
	}

	// function renderLoadingPagination() {
	// 	if (!loadingPosts) return <></>

	// 	return Array.from({ length: 6 }).map((_, index) => (
	// 		<PostItem data="skeleton" key={index} />
	// 	))
	// }

	return (
		<>
			<UserCard />
			<FormFilter />

			<PostsListContainer>
				{renderPosts()}
				{/* {renderLoadingPagination()} */}
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
