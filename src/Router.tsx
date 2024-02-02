import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Blog } from './pages/Blog'
import { NotFound } from './pages/NotFound'
import { PostPage } from './pages/Post'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Blog />} />
				<Route path="/post/:id" element={<PostPage />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	)
}
