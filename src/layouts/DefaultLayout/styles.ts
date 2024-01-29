import styled from 'styled-components'

export const LayoutContainer = styled.div`
	padding-bottom: 10vw;
`

export const LayoutCenter = styled.div`
	position: relative;
	z-index: 2;
	width: 100%;
	padding: 0 2rem;
	max-width: calc(54rem + 4rem);
	margin: 0 auto;
	margin-top: -4.6vw;

	@media (max-width: 575px) {
		margin-top: -4rem;
	}
`
