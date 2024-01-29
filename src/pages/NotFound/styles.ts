import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NotFoundContainer = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 2.5rem;
	border-radius: 0.625rem;
	background: ${(props) => props.theme['base-profile']};
	gap: 1.5rem;
`

export const NotFoundButton = styled(Link)`
	display: block;
	color: ${(props) => props.theme['base-title']};
	background: ${(props) => props.theme.blue};
	padding: 0.75rem 1.25rem 0.6rem;
	border-radius: 0.625rem;
	text-decoration: none;
	font-weight: 700;
	font-size: 0.83rem;
	text-transform: uppercase;
	white-space: nowrap;
	line-height: 1;
	transition:
		background 200ms ease,
		box-shadow 200ms ease;

	&:hover {
		background: ${(props) => props.theme['blue-hover']};
	}
`
