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

	input {
		width: 100%;
		padding: 0.75rem 1rem;
		background: ${(props) => props.theme['base-input']};
		color: ${(props) => props.theme['base-text']};
		border: 1px solid ${(props) => props.theme['base-border']};
		border-radius: 0.625rem;
		box-shadow: none !important;
		transition: opacity 200ms ease, 200ms ease;
		
		&::placeholder {
			color: ${(props) => props.theme['base-label']};
		}

		&:focus {
			border-color: ${(props) => props.theme.blue};
		}

		&:disabled {
			opacity: .66;
			cursor: wait;
		}
	}

	h1,
	h2,
	h3 {
		font-weight: bold;
		color: ${(props) => props.theme['base-title']};
	}

	h1 {
		font-size: 1.5rem;
		line-height: 1.3;
		
		@media (max-width: 575px) {
			font-size: 1.25rem;
		}
	}

	h2 {
		font-size: 1.25rem;
		
		@media (max-width: 575px) {
			font-size: 1.15rem;
		}
	}

	h3 {
		font-size: 1.125rem;
		
		@media (max-width: 575px) {
			font-size: 1rem;
		}
	}

	.toast {
		gap: 1rem;

		> div {
			margin: 0 !important;
			white-space: normal !important;
			text-wrap: balance !important;

			&:first-child {
				font-size: 1.5em !important;
			}
		}
	}
`
