// import { useParams } from 'react-router-dom'
import { PostBody } from './components/Body'
import { PostHeader } from './components/Header'
import { PostContainer } from './styles'

export function Post() {
	// const { id } = useParams()

	return (
		<PostContainer>
			<PostHeader />
			<PostBody />
		</PostContainer>
	)
}
