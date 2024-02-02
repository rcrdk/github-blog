import axios from 'axios'

import { env } from '@/env'

export const API = axios.create({
	baseURL: env.VITE_API_URL,
	headers: {
		'X-GitHub-Api-Version': env.VITE_API_VERSION,
	},
})

if (env.VITE_API_ENABLE_DELAY) {
	API.interceptors.request.use(async (config) => {
		await new Promise((resolve) => setTimeout(resolve, 2000))
		return config
	})
}
