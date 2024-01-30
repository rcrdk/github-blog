import { UserCardContainer, UserInfo } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
	faArrowUpRightFromSquare,
	faBuilding,
	faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { useContextSelector } from 'use-context-selector'
import { BlogContext } from '../../../../context/BlogContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export function UserCard() {
	const navigate = useNavigate()

	const { fetchUser, user } = useContextSelector(BlogContext, (context) => {
		return {
			fetchUser: context.fetchUser,
			user: context.user,
		}
	})

	useEffect(() => {
		fetchUser().catch((err) => {
			console.error('ERR::', err.message)
			navigate('/404')
			toast('Erro ao carregar usuário. Verifique o console.', {
				icon: '💩',
			})
		})
	}, [fetchUser, navigate])

	return (
		<UserCardContainer>
			{user.avatar_url && <img src={user.avatar_url} alt="" />}

			<h1>{user.name}</h1>

			<a href={user.html_url} target="_blank" rel="noopener noreferrer">
				GitHub
				<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
			</a>

			<p>{user.bio}</p>

			<div>
				<UserInfo>
					<FontAwesomeIcon icon={faGithub} />
					{user.login}
				</UserInfo>

				{user.company && (
					<UserInfo>
						<FontAwesomeIcon icon={faBuilding} />
						{user.company}
					</UserInfo>
				)}

				<UserInfo>
					<FontAwesomeIcon icon={faUserGroup} />
					{user.followers === 1 ? `1 seguidor` : `${user.followers} seguidores`}
				</UserInfo>
			</div>
		</UserCardContainer>
	)
}
