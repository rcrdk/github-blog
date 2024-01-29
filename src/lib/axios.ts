import axios from 'axios'

export const API = axios.create({
	baseURL: 'https://api.github.com',
	headers: {
		'X-GitHub-Api-Version': '2022-11-28',
	},
})
