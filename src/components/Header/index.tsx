import {
	HeaderBgCard,
	HeaderBgCircleLeft,
	HeaderBgCircleRight,
	HeaderBgLineLeft,
	HeaderBgLineRight,
	HeaderContainer,
} from './styles'

import brandImage from '../../assets/brand.svg'

export function Header() {
	return (
		<HeaderContainer>
			<img src={brandImage} alt="" />

			<HeaderBgCard />
			<HeaderBgCircleLeft />
			<HeaderBgCircleRight />
			<HeaderBgLineLeft />
			<HeaderBgLineRight />
		</HeaderContainer>
	)
}
