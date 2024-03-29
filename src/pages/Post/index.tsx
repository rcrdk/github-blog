import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
	faArrowUpRightFromSquare,
	faCalendar,
	faChevronLeft,
	faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format, formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { useContextSelector } from 'use-context-selector'

import { BlogContext } from '../../context/BlogContext'
import { Post } from '../../dtos/post'
import {
	PostBodyContainer,
	PostContainer,
	PostHeaderBackButton,
	PostHeaderContainer,
	PostHeaderGitHubButton,
	PostHeaderInfos,
	PostMarkdown,
} from './styles'

export function PostPage() {
	const [post, setPost] = useState({} as Post)
	const [loading, setLoading] = useState(true)

	const { id } = useParams()
	const navigate = useNavigate()

	const fetchPost = useContextSelector(BlogContext, (context) => {
		return context.fetchPost
	})

	useEffect(() => {
		setLoading(true)

		if (id) {
			fetchPost(id)
				.then((res) => {
					setPost(res)
					setLoading(false)
				})
				.catch((err) => {
					console.error('ERR::', err.message)
					navigate('/404')
					toast('Erro ao carregar publicação. Verifique o log no console.', {
						icon: '🤡',
					})
				})
		} else {
			navigate('/404')
		}
	}, [id, fetchPost, navigate])

	function renderPostHeader() {
		if (loading || !post) {
			return (
				<>
					<PostHeaderBackButton to="/" className="skeleton" tabIndex={-1}>
						Carregando...
					</PostHeaderBackButton>
					<div />
					<PostHeaderGitHubButton href="#!" className="skeleton">
						Carregando...
					</PostHeaderGitHubButton>

					<h1 className="skeleton">Carregando...</h1>

					<PostHeaderInfos>
						<li>
							<span className="skeleton">Carregando...</span>
						</li>
						<li>
							<span className="skeleton">Carregando...</span>
						</li>
						<li>
							<span className="skeleton">Carregando...</span>
						</li>
					</PostHeaderInfos>
				</>
			)
		}

		return (
			<>
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
			</>
		)
	}

	function renderPostBody() {
		if (loading || !post) {
			return Array.from({ length: 32 }).map((_, index) => (
				<p
					className="skeleton"
					style={{
						width: Math.floor(Math.random() * (100 - 50 + 1) + 50) + '%',
					}}
					key={index}
				>
					Carregando...
				</p>
			))
		}
		return (
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
		)
	}

	return (
		<PostContainer>
			<PostHeaderContainer>{renderPostHeader()}</PostHeaderContainer>
			<PostBodyContainer>{renderPostBody()}</PostBodyContainer>
		</PostContainer>
	)
}
