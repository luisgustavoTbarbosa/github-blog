import styled from 'styled-components'

export const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme['dark-blue']};
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);

  figure {
    display: flex;

    img {
      max-width: 9.25rem;
      max-height: 9.25rem;
      border-radius: 8px;
    }
  }
`

export const ProfileContent = styled.div`
  flex: 1;
`

export const ProfileTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme['off-white']};
    font-size: 1.5rem;
    line-height: 130%;
  }

  a {
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

export const ProfileDescription = styled.div`
  margin: 0.5rem 0 1.5rem;
  line-height: 160%;
`

export const ProfileTags = styled.div`
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const PostsContainer = styled.main`
  margin-top: 4.5rem;
`

export const PostsHeader = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.125rem;
    font-weight: bold;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-400']};
  }
`

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  a {
    text-decoration: none;
  }
`
