import styled from 'styled-components'

export const PostHeader = styled.header`
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme['dark-blue']};
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);

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
export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  line-height: 160%;

  a {
    color: ${(props) => props.theme.blue};
  }
`
