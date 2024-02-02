import { format, formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { memo } from 'react'
import { Link } from 'react-router-dom'

import { Post } from '../../../../dtos/post'
import { PostItemContainer } from './styles'

interface PostItemProps {
	data: Post | 'skeleton'
}

function PostItemComponent({ data }: PostItemProps) {
	return (
		<PostItemContainer>
			{data === 'skeleton' ? (
				<a href="#!" tabIndex={-1}>
					<h2 className="skeleton">Carregando...</h2>
					<span className="skeleton">Carregando...</span>
					<p className="skeleton">Carregando...</p>
					<p className="skeleton">Carregando...</p>
					<p className="skeleton">Carregando...</p>
					<p className="skeleton">Carregando...</p>
				</a>
			) : (
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
			)}
		</PostItemContainer>
	)
}

export const PostItem = memo(PostItemComponent)
