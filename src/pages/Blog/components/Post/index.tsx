import { Link } from 'react-router-dom'
import { PostItemContainer } from './styles'
import { Post } from '../../../../dtos/post'
import { format, formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { memo } from 'react'

interface PostItemProps {
	data: Post
}

function PostItemComponent({ data }: PostItemProps) {
	return (
		<PostItemContainer>
			<Link to={`/post/${data.number}`}>
				<h2>{data.title}</h2>
				<span
					title={format(
						data.created_at || new Date(),
						"dd' de 'MMMM' de 'yyyy' às 'HH:mm",
						{ locale: ptBR },
					)}
				>
					{formatDistanceToNowStrict(data.created_at || new Date(), {
						locale: ptBR,
						addSuffix: true,
					})}
				</span>
				<p>{data.body}</p>
			</Link>
		</PostItemContainer>
	)
}

export const PostItem = memo(PostItemComponent)
