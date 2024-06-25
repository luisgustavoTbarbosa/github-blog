import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { SearchFormContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
interface SearchFormProps {
  handleFetchIssues: (query: string) => void
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm({ handleFetchIssues }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchIssues(data: SearchFormInputs) {
    handleFetchIssues(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
      <button type="submit">Buscar</button>
    </SearchFormContainer>
  )
}
