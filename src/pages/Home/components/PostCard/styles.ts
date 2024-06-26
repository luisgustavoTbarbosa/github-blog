import styled from 'styled-components'

export const PostCardContainer = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme['dark-blue-300']};
  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${(props) => props.theme['dark-blue-100']};
    transition: border-color 0.2 ease;
  }

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;

    h2 {
      flex: 1;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      height: 4rem;
      overflow: hidden;
      color: ${(props) => props.theme['off-white']};
      font-size: 1.25rem;
      line-height: 160%;
    }

    time {
      color: ${(props) => props.theme['gray-400']};
      font-size: 0.875rem;
      line-height: 2.2;
    }
  }

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    height: 6.399rem;
    color: ${(props) => props.theme['gray-300']};
    line-height: 160%;
    word-break: break-word;
  }
`
