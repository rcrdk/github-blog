import { useContextSelector } from 'use-context-selector'

import { FormFilterContainer } from './styles'
import { BlogContext } from '../../../../context/BlogContext'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const searchFormSchema = z.object({
	query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function FormFilter() {
	const { totalPosts, fetchPosts, onResetPagination, loadingPosts } =
		useContextSelector(BlogContext, (context) => {
			return {
				totalPosts: context.totalPosts,
				fetchPosts: context.fetchPosts,
				onResetPagination: context.onResetPagination,
				loadingPosts: context.loadingPosts,
			}
		})

	const { register, handleSubmit } = useForm<SearchFormInputs>({
		resolver: zodResolver(searchFormSchema),
	})

	async function handleSearchPosts(data: SearchFormInputs) {
		await fetchPosts(data.query, 1)
		onResetPagination()
	}

	return (
		<FormFilterContainer>
			<h3>Publicações</h3>
			<span>
				{totalPosts === 1 ? '1 publicação' : `${totalPosts} publicações`}
			</span>

			<form onSubmit={handleSubmit(handleSearchPosts)} action="">
				<input
					type="text"
					placeholder="Buscar conteúdo"
					autoComplete="off"
					disabled={loadingPosts}
					{...register('query')}
				/>
				{loadingPosts && <FontAwesomeIcon icon={faCircleNotch} />}
			</form>
		</FormFilterContainer>
	)
}
