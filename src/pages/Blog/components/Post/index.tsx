import { Link } from 'react-router-dom'
import { PostItemContainer } from './styles'

export function PostItem() {
	return (
		<PostItemContainer>
			<Link to={'/post/1'}>
				<h2>JavaScript data types and data structures</h2>
				<span>Há 1 dia</span>
				<p>
					Programming languages all have built-in data structures, but these
					differ from one language to another. This article attempts to list the
					built-in data structures available in JavaScript and what properties
					they have. These can be used to build other data structures.
				</p>
			</Link>
		</PostItemContainer>
	)
}
