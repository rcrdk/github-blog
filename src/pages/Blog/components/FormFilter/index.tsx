import { FormFilterContainer } from './styles'

export function FormFilter() {
	return (
		<FormFilterContainer>
			<h3>Publicações</h3>
			<span>3 publicações</span>

			<form action="">
				<input type="text" placeholder="Buscar conteúdo" />
			</form>
		</FormFilterContainer>
	)
}
