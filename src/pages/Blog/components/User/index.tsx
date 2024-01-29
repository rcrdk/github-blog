import { UserCardContainer, UserInfo } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
	faArrowUpRightFromSquare,
	faBuilding,
	faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

export function UserCard() {
	return (
		<UserCardContainer>
			<img src="http://github.com/rcrdk.png" alt="" />

			<h1>Cameron Williamson</h1>

			<a
				href="http://github.com/rcrdk"
				target="_blank"
				rel="noopener noreferrer"
			>
				GitHub
				<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
			</a>

			<p>
				Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra
				massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar
				vel mass.
			</p>

			<div>
				<UserInfo>
					<FontAwesomeIcon icon={faGithub} />
					rcrdk
				</UserInfo>

				<UserInfo>
					<FontAwesomeIcon icon={faBuilding} />
					SmartMK
				</UserInfo>

				<UserInfo>
					<FontAwesomeIcon icon={faUserGroup} />
					16 seguidores
				</UserInfo>
			</div>
		</UserCardContainer>
	)
}
