import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Blog } from './pages/Blog'
import { Post } from './pages/Post'
import { NotFound } from './pages/NotFound'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Blog />} />
				<Route path="/post/:id" element={<Post />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	)
}
