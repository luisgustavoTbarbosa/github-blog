import styled from 'styled-components'
import headerBanner from '../../assets/header-banner.svg'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 4rem;
  height: 18.5rem;
  background-image: url(${headerBanner});
  background-size: cover;
`
