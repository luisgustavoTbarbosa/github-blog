import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  body {
    background-color: ${(props) => props.theme['dark-blue-500']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
  }

  .redirect-link {
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
    padding-bottom: 2px;
    border-bottom: 1px solid transparent;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 1.2;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      transition: border-color 0.2s ease;
      border-color: ${(props) => props.theme.blue};
    }
  }
`
