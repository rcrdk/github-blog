import styled from 'styled-components'

import bgLines from '../../assets/header-lines.svg'

export const HeaderContainer = styled.header`
	position: relative;
	z-index: 1;
	display: flex;
	padding: 3.33vw 0 calc(3.44vw + 4.6vw);
	align-items: center;
	justify-content: center;
	background: ${(props) => props.theme['base-profile']};
	overflow: hidden;

	@media (max-width: 575px) {
		padding: 3rem 0;
		padding: 3rem 0 calc(3rem + 4rem);
	}

	img {
		display: block;
		width: 9rem;
		aspect-ratio: 146 / 79;
	}
`

const HeaderBg = styled.div`
	display: block;
	position: absolute;
	z-index: -1;
	background: ${(props) => props.theme['base-blur']};
	pointer-events: none;
`

export const HeaderBgCard = styled(HeaderBg)`
	left: 50%;
	bottom: 1rem;
	max-width: 100vw;
	width: calc(54rem + 4rem);
	height: 4.6vw;
	transform: translateX(-50%);
	filter: blur(212px);

	@media (max-width: 575px) {
		height: 4rem;
	}
`

export const HeaderBgCircleLeft = styled(HeaderBg)`
	inset: 0 auto auto 0;
	width: 20vw;
	height: 20vw;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	filter: blur(400px);
`

export const HeaderBgCircleRight = styled(HeaderBg)`
	inset: 0 0 auto auto;
	width: 12vw;
	height: 12vw;
	border-radius: 50%;
	transform: translate(0, -25%);
	filter: blur(368px);
`

const HeaderBgLines = styled.div`
	position: absolute;
	z-index: -1;
	background-size: auto 100% !important;
	background: url(${bgLines}) right bottom no-repeat;
	width: 21vw;
	pointer-events: none;
`

export const HeaderBgLineRight = styled(HeaderBgLines)`
	inset: 0 0 1rem auto;
`

export const HeaderBgLineLeft = styled(HeaderBgLines)`
	inset: 0 auto 1rem 0;
	background-position: left bottom;
	transform: rotateX(180deg) rotateY(180deg);
`
