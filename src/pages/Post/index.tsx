import { useParams } from 'react-router-dom'

export function Post() {
  const { id } = useParams()
  console.log('id', id)

  return <div>Página do post {id}</div>
}
