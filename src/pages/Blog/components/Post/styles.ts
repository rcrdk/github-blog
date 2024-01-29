import styled from 'styled-components'

export const PostItemContainer = styled.article`
	a {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: auto 1fr;
		align-items: flex-start;
		gap: 1rem 1.25rem;
		min-height: 100%;
		padding: 2rem;
		border-radius: 0.625rem;
		background: ${(props) => props.theme['base-post']};
		color: currentColor;
		text-decoration: none;
		border: 3px solid ${(props) => props.theme['base-post']};
		transition:
			border 200ms ease,
			box-shadow 200ms ease;

		&:hover {
			border-color: ${(props) => props.theme['base-border']};
		}
	}

	span {
		display: block;
		white-space: nowrap;
		color: ${(props) => props.theme['base-span']};
		font-size: 0.875rem;
	}

	p {
		grid-column: 1 / span 2;
	}
`