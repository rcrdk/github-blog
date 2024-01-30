import styled from 'styled-components'

export const FormFilterContainer = styled.section`
	margin-bottom: 3rem;
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 0.75rem;

	span {
		display: block;
		white-space: normal;
		font-size: 0.875rem;
		color: ${(props) => props.theme['base-span']};
	}

	form {
		position: relative;
		grid-column: 1 / span 2;

		svg {
			position: absolute;
			top: 50%;
			right: 1rem;
			margin-top: -0.7rem;
			font-size: 1.4rem;
			color: ${(props) => props.theme.blue};
			animation: loading 1s linear 0s infinite;
		}
	}

	@keyframes loading {
		to {
			transform: rotate(360deg);
		}
	}
`
