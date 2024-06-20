import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Buscar conteúdo" />
      <button>Buscar</button>
    </SearchFormContainer>
  )
}
