import styled from 'styled-components'

export const PostsListContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;

	@media (max-width: 991px) {
		grid-template-columns: 1fr;
	}
`

export const PostsPagination = styled.button`
	display: block;
	margin: 2rem auto 0;
	color: ${(props) => props.theme['base-title']};
	background: ${(props) => props.theme.blue};
	padding: 0.875rem 1.5rem 0.8rem;
	border-radius: 0.625rem;
	border: 0;
	text-decoration: none;
	font-weight: 700;
	font-size: 0.83rem;
	text-transform: uppercase;
	white-space: nowrap;
	line-height: 1;
	cursor: pointer;
	transition:
		opacity 200ms ease,
		background 200ms ease,
		box-shadow 200ms ease;

	&:not(:disabled):hover {
		background: ${(props) => props.theme['blue-hover']};
	}

	&:disabled {
		cursor: wait;
		opacity: 0.5;
	}
`

export const PostsEmpty = styled.div`
	grid-column: span 2;
	padding: 1.5rem;
	border-radius: 0.375rem;
	color: ${(props) => props.theme['base-span']};
	background: ${(props) => props.theme['base-profile']};
	border: 1px solid ${(props) => props.theme['base-border']};
`
