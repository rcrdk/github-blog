import brandImage from '../../assets/brand.svg'
import {
	HeaderBgCard,
	HeaderBgCircleLeft,
	HeaderBgCircleRight,
	HeaderBgLineLeft,
	HeaderBgLineRight,
	HeaderContainer,
} from './styles'

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
