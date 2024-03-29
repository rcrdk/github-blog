import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as z from 'zod'

import { BlogContext } from '../../../../context/BlogContext'
import { FormFilterContainer } from './styles'

const searchFormSchema = z.object({
	query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function FormFilter() {
	const {
		totalPosts,
		fetchPosts,
		onResetPagination,
		loadingPosts,
		onChangeSearch,
	} = useContextSelector(BlogContext, (context) => {
		return {
			totalPosts: context.totalPosts,
			fetchPosts: context.fetchPosts,
			onResetPagination: context.onResetPagination,
			loadingPosts: context.loadingPosts,
			onChangeSearch: context.onChangeSearch,
		}
	})

	const { register, handleSubmit } = useForm<SearchFormInputs>({
		resolver: zodResolver(searchFormSchema),
	})

	async function handleSearchPosts(data: SearchFormInputs) {
		onChangeSearch(true)
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
