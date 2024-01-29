import { User } from './user'

export interface Post {
	active_lock_reason: string | null
	// assignee: null
	// assignees: []
	author_association: string
	body: string
	closed_at: string | null
	comments: number
	comments_url: string
	created_at: string
	events_url: string
	html_url: string
	id: number
	// labels: []
	labels_url: string
	locked: boolean
	// milestone: null
	node_id: string
	number: number
	performed_via_github_app: string | null
	reactions: {
		url: string
		total_count: number
		'+1': number
		'-1': number
		laugh: number
		hooray: number
		confused: number
		heart: number
		rocket: number
		eyes: number
	}
	repository_url: string
	state: string
	state_reason: string | null
	timeline_url: string
	title: string
	updated_at: string
	url: string
	user: User
}
