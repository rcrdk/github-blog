import { z } from 'zod'

const envSchema = z.object({
	VITE_API_URL: z.string().url(),
	VITE_API_VERSION: z.string(),
	VITE_API_ENABLE_DELAY: z.string().transform((value) => value === 'true'),
	VITE_GITHUB_USER: z.string(),
	VITE_GITHUB_REPO: z.string(),
})

export const env = envSchema.parse(import.meta.env)
