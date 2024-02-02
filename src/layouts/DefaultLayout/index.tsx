import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import { LayoutCenter, LayoutContainer } from './styles'

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
