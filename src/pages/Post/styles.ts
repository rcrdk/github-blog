import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'

export const PostContainer = styled.article`
	display: block;
`

export const PostHeaderContainer = styled.header`
	display: grid;
	grid-template-columns: auto 1fr auto;
	padding: 2rem;
	border-radius: 0.625rem;
	background: ${(props) => props.theme['base-profile']};

	@media (max-width: 575px) {
		padding: 1.5rem;
	}

	h1 {
		grid-column: 1 / span 3;
		margin: 1.5rem 0 0.75rem;
		text-wrap: balance;
	}
`

const PostHeaderLink = css`
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
`

export const PostHeaderBackButton = styled(Link)`
	${PostHeaderLink}
`

export const PostHeaderGitHubButton = styled.a`
	${PostHeaderLink}
`

export const PostHeaderInfos = styled.ul`
	grid-column: 1 / span 3;
	list-style: none;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 0.5rem 1.5rem;

	li {
		display: flex;
		align-items: center;
		white-space: nowrap;
		gap: 0.5rem;
		color: ${(props) => props.theme['base-subtitle']};

		svg {
			font-size: 1.125rem;
			color: ${(props) => props.theme['base-label']};
		}
	}
`

export const PostBodyContainer = styled.section`
	padding: 2.5rem 2rem 0;

	@media (max-width: 575px) {
		padding: 2rem 1.5rem 0;
	}
`

export const PostMarkdown = styled(Markdown)`
	> *:not(:last-child) {
		margin-bottom: 1rem;
	}

	ul,
	ol {
		padding-left: 1.5rem;

		li:has(input) {
			list-style: none;
		}
	}

	img {
		display: block;
		max-width: 100%;
		border-radius: 0.675rem;

		&:not(:first-child) {
			margin-top: 1.5rem;
		}

		&:not(:last-child) {
			margin-bottom: 1.5rem;
		}
	}

	pre > div {
		padding: 1rem !important;
		margin: 0 !important;
		background: ${(props) => props.theme['base-post']} !important;
		border-radius: 0.375rem;

		code {
			background: ${(props) => props.theme['base-post']} !important;
		}
	}

	input {
		width: auto;
		accent-color: ${(props) => props.theme.blue} !important;
	}
`
