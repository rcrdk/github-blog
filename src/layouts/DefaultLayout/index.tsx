import { Outlet } from 'react-router-dom'

import { LayoutCenter, LayoutContainer } from './styles'
import { Header } from '../../components/Header'

export function DefaultLayout() {
	return (
		<LayoutContainer>
			<Header />

			<LayoutCenter>
				<Outlet />
			</LayoutCenter>
		</LayoutContainer>
	)
}
