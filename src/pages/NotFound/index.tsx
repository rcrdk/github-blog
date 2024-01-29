import { NotFoundButton, NotFoundContainer } from './styles'

export function NotFound() {
	return (
		<NotFoundContainer>
			<h1>Página não encontrada</h1>
			<NotFoundButton to="/">Página inicial</NotFoundButton>
		</NotFoundContainer>
	)
}
