import styled from 'styled-components'

export const UserCardContainer = styled.section`
	margin-bottom: 3.75vw;
	padding: 2rem 2rem 2rem 2.5rem;
	border-radius: 0.625rem;
	background: ${(props) => props.theme['base-profile']};
	display: grid;
	align-items: flex-start;
	gap: 0.5rem 2rem;
	grid-template-columns: 9.25rem 1fr auto;
	grid-template-rows: auto auto 1fr;
	grid-template-areas: 'avatar title link' 'avatar description description' 'avatar infos infos';

	@media (max-width: 575px) {
		margin-bottom: 3rem;
		padding: 1.5rem;
		gap: 0 1.25rem;
		grid-template-columns: 5rem 1fr;
		grid-template-rows: 1fr auto auto 1fr auto auto;
		grid-template-areas: 'avatar .' 'avatar title' 'avatar link' 'avatar .' 'description description' 'infos infos';
	}

	> h1 {
		grid-area: title;

		@media (max-width: 575px) {
			margin-bottom: 0.25rem;
		}
	}

	> p {
		grid-area: description;

		@media (max-width: 575px) {
			margin-top: 1rem;
		}
	}

	> a {
		grid-area: link;
		margin-top: 0.35rem;
		display: flex;
		align-items: center;
		color: ${(props) => props.theme.blue};
		font-weight: bold;
		text-transform: uppercase;
		font-size: 0.75rem;
		text-decoration: none;
		gap: 0.5rem;
		transition:
			color 200ms ease,
			box-shadow 200ms ease;

		&:hover {
			color: ${(props) => props.theme['base-text']};
		}
	}
`

export const UserAvatar = styled.div`
	grid-area: avatar;
	position: relative;
	border-radius: 0.625rem;
	overflow: hidden;
	aspect-ratio: 1;
	background: ${(props) => props.theme['base-post']};

	> img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
		object-position: center;
	}

	svg {
		position: absolute;
		inset: 25%;
		width: 50%;
		height: 50%;
		color: ${(props) => props.theme['base-label']};
	}

	.skeleton {
		position: absolute;
		inset: 0;
	}
`

export const UserInfoGroup = styled.div`
	grid-area: infos;
	padding-top: 1rem;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 0.5rem 1.5rem;

	&:has(.skeleton) {
		gap: 0.5rem;
	}
`

export const UserInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: ${(props) => props.theme['base-subtitle']};

	svg {
		font-size: 1.125em;
		color: ${(props) => props.theme['base-label']};
	}
`
