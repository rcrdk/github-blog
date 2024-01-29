import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { BlogProvider } from './context/BlogContext'

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BlogProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</BlogProvider>

			<GlobalStyle />
		</ThemeProvider>
	)
}
