import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { BlogProvider } from './context/BlogContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

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
