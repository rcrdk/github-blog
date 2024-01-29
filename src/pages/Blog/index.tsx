import { FormFilter } from './components/FormFilter'
import { PostItem } from './components/Post'
import { UserCard } from './components/User'
import { PostsListContainer } from './styles'

export function Blog() {
	return (
		<>
			<UserCard />
			<FormFilter />

			<PostsListContainer>
				{Array.from({ length: 6 }).map((_, index) => (
					<PostItem key={index} />
				))}
			</PostsListContainer>
		</>
	)
}
