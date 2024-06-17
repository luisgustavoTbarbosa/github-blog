import { Header } from '../../components/Header'
import { OutletContainer } from './styles'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </div>
  )
}
