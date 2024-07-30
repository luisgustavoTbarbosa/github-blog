import styled from 'styled-components'

export const PostHeader = styled.header`
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme['dark-blue']};

  h1 {
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['off-white']};
    font-size: 1.5rem;
  }
`

export const RedirectsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`

export const PostTags = styled.div`
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: ${(props) => props.theme['gray-100']};
  }
`
