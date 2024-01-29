import {
	PostHeaderBackButton,
	PostHeaderContainer,
	PostHeaderGitubButton,
	PostHeaderInfos,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowUpRightFromSquare,
	faCalendar,
	faChevronLeft,
	faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function PostHeader() {
	return (
		<PostHeaderContainer>
			<PostHeaderBackButton to="/">
				<FontAwesomeIcon icon={faChevronLeft} />
				Voltar
			</PostHeaderBackButton>

			<div />

			<PostHeaderGitubButton
				href="https://github.com/rcrdk"
				target="_blank"
				rel="noopener noreferrer"
			>
				Ver no GitHub
				<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
			</PostHeaderGitubButton>

			<h1>JavaScript data types and data structures</h1>

			<PostHeaderInfos>
				<li>
					<FontAwesomeIcon icon={faGithub} />
					<span>rcrdk</span>
				</li>

				<li>
					<FontAwesomeIcon icon={faCalendar} />
					<span>Há 1 dia</span>
				</li>

				<li>
					<FontAwesomeIcon icon={faComment} />
					<span>5 comentários</span>
				</li>
			</PostHeaderInfos>
		</PostHeaderContainer>
	)
}
