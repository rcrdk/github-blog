import {
	UserAvatar,
	UserCardContainer,
	UserInfo,
	UserInfoGroup,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
	faArrowUpRightFromSquare,
	faBuilding,
	faUser,
	faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { useContextSelector } from 'use-context-selector'
import { BlogContext } from '../../../../context/BlogContext'
import { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function UserCardComponent() {
	const navigate = useNavigate()

	const [loading, setLoading] = useState(true)

	const { fetchUser, user } = useContextSelector(BlogContext, (context) => {
		return {
			fetchUser: context.fetchUser,
			user: context.user,
		}
	})

	useEffect(() => {
		setLoading(true)

		fetchUser()
			.catch((err) => {
				console.error('ERR::', err.message)
				navigate('/404')
				toast('Erro ao carregar usuário. Verifique o log no console.', {
					icon: '💩',
				})
			})
			.finally(() => setLoading(false))
	}, [fetchUser, navigate])

	function renderUser() {
		if (loading || !user) {
			return (
				<>
					<UserAvatar>
						<div className="skeleton" />
					</UserAvatar>

					<h1>
						<span className="skeleton">Carregando nome...</span>
					</h1>
					<p className="skeleton">Carregando descrição...</p>
					<UserInfoGroup>
						<UserInfo>
							<span className="skeleton">Carregando nome...</span>
						</UserInfo>
						<UserInfo>
							<span className="skeleton">Carregando nome...</span>
						</UserInfo>
						<UserInfo>
							<span className="skeleton">Carregando nome...</span>
						</UserInfo>
					</UserInfoGroup>
				</>
			)
		}

		return (
			<>
				<UserAvatar>
					{user.avatar_url ? (
						<img src={user.avatar_url} alt="" />
					) : (
						<FontAwesomeIcon icon={faUser} />
					)}
				</UserAvatar>

				<h1>{user.name}</h1>
				<a href={user.html_url} target="_blank" rel="noopener noreferrer">
					GitHub
					<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
				</a>
				<p>{user.bio}</p>
				<UserInfoGroup>
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
						{user.followers === 1
							? `1 seguidor`
							: `${user.followers} seguidores`}
					</UserInfo>
				</UserInfoGroup>
			</>
		)
	}

	return <UserCardContainer>{renderUser()}</UserCardContainer>
}

export const UserCard = memo(UserCardComponent)
