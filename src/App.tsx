import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { BlogProvider } from './context/BlogContext'
import { Toaster } from 'react-hot-toast'

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BlogProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</BlogProvider>

			<Toaster
				toastOptions={{
					position: 'bottom-center',
					duration: 3000,
					className: 'toast',
					style: {
						padding: '1rem 1.5rem',
						lineHeight: '1.2',
						color: defaultTheme['base-text'],
						background: defaultTheme['base-input'],
						border: `1px solid ${defaultTheme['base-border']}`,
						borderRadius: '1rem',
						textWrap: 'balance',
					},
				}}
			/>
			<GlobalStyle />
		</ThemeProvider>
	)
}
