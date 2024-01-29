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
		grid-column: 1 / span 2;
	}
`
