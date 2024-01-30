import { Post } from '../../dtos/post'

import { useEffect, useState } from 'react'

import {
	PostBodyContainer,
	PostContainer,
	PostHeaderBackButton,
	PostHeaderContainer,
	PostHeaderGitHubButton,
	PostHeaderInfos,
	PostMarkdown,
} from './styles'

import { useContextSelector } from 'use-context-selector'
import { BlogContext } from '../../context/BlogContext'

import { useNavigate, useParams } from 'react-router-dom'

import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
	faArrowUpRightFromSquare,
	faCalendar,
	faChevronLeft,
	faComment,
} from '@fortawesome/free-solid-svg-icons'
import { format, formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import toast from 'react-hot-toast'

export function PostPage() {
	const [post, setPost] = useState({} as Post)

	const { id } = useParams()
	const navigate = useNavigate()

	const fetchPost = useContextSelector(BlogContext, (context) => {
		return context.fetchPost
	})

	useEffect(() => {
		if (id) {
			fetchPost(id)
				.then((res) => setPost(res))
				.catch((err) => {
					console.error('ERR::', err.message)
					navigate('/404')
					toast('Erro ao carregar publicação. Verifique o console.', {
						icon: '🤡',
					})
				})
		} else {
			navigate('/404')
		}
	}, [id, fetchPost, navigate])

	return (
		<PostContainer>
			<PostHeaderContainer>
				<PostHeaderBackButton to="/">
					<FontAwesomeIcon icon={faChevronLeft} />
					Voltar
				</PostHeaderBackButton>

				<div />

				<PostHeaderGitHubButton
					href={post.html_url}
					target="_blank"
					rel="noopener noreferrer"
				>
					Ver no GitHub
					<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
				</PostHeaderGitHubButton>

				<h1>{post.title}</h1>

				<PostHeaderInfos>
					<li>
						<FontAwesomeIcon icon={faGithub} />
						<span>{post.user?.login}</span>
					</li>

					<li
						title={format(
							post.created_at || new Date(),
							"dd' de 'MMMM' de 'yyyy' às 'HH:mm",
							{
								locale: ptBR,
							},
						)}
					>
						<FontAwesomeIcon icon={faCalendar} />
						<span>
							{formatDistanceToNowStrict(post.created_at || new Date(), {
								locale: ptBR,
								addSuffix: true,
							})}
						</span>
					</li>

					<li>
						<FontAwesomeIcon icon={faComment} />
						<span>
							{post.comments === 1
								? '1 comentário'
								: `${post.comments} comentários`}
						</span>
					</li>
				</PostHeaderInfos>
			</PostHeaderContainer>

			<PostBodyContainer>
				<PostMarkdown
					rehypePlugins={[rehypeRaw]}
					remarkPlugins={[remarkGfm]}
					components={{
						h3: 'h2',
						// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
						code({ node, inline, className, children, ...props }: any) {
							const match = /language-(\w+)/.exec(className || '')

							return !inline && match ? (
								<SyntaxHighlighter
									style={materialDark}
									PreTag="div"
									language={match[1]}
									{...props}
								>
									{String(children).replace(/\n$/, '')}
								</SyntaxHighlighter>
							) : (
								<code className={className} {...props}>
									{children}
								</code>
							)
						},
					}}
				>
					{post.body}
				</PostMarkdown>
			</PostBodyContainer>
		</PostContainer>
	)
}
