import styled from 'styled-components'

export const PostsListContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;

	@media (max-width: 991px) {
		grid-template-columns: 1fr;
	}
`
