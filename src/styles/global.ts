import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
	}

	:focus {
		outline: none;
	}

	:focus-visible {
		outline: 0;
		box-shadow: 0 0 0 1px ${(props) => props.theme['base-background']}, 0 0 0 3px ${(props) => props.theme.blue};
	}

	body {
		background: ${(props) => props.theme['base-background']};
		color: ${(props) => props.theme['base-text']};
		line-height: 1.6;
	}

	body,
	input,
	textarea,
	button {
		font: 400 1rem 'Nunito', sans-serif;
		line-height: 1.6;
	}
`
