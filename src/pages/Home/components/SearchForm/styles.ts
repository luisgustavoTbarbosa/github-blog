import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  height: 3.125rem;
  margin: 0.75rem 0 3rem;

  input {
    flex: 1;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background: ${(props) => props.theme['dark-blue-600']};
    border: 1px solid ${(props) => props.theme['dark-blue-200']};
    color: ${(props) => props.theme['gray-300']};

    &::placeholder {
      color: ${(props) => props.theme['dark-blue-100']};
    }
  }

  button {
    border-radius: 6px;
    padding: 0.75rem 1rem;
    border: 1px solid ${(props) => props.theme['dark-blue-200']};
    background: ${(props) => props.theme['dark-blue-200']};
    color: ${(props) => props.theme.white};
    cursor: pointer;

    &:hover {
      border: 1px solid ${(props) => props.theme['dark-blue-300']};
      background: ${(props) => props.theme['dark-blue-300']};
      transition:
        background-color 0.2s ease,
        border 0.2s ease;
    }
  }
`
