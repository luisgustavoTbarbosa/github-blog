import { Link, useParams } from 'react-router-dom'
import { PostHeader, PostTags, RedirectsContainer } from './styles'
import {
  ArrowSquareOut,
  CalendarDots,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from '@phosphor-icons/react'

export function Post() {
  const { id } = useParams()
  console.log('id', id)

  return (
    <>
      <PostHeader>
        <RedirectsContainer>
          <Link to={'/'} className="redirect-link">
            <CaretLeft size={16} color="#3294F8" weight="bold" />
            Voltar
          </Link>
          <a href="#" className="redirect-link">
            Ver no github
            <ArrowSquareOut size={16} color="#3294F8" weight="bold" />
          </a>
        </RedirectsContainer>
        <h1>JavaScript data types and data structures</h1>
        <PostTags>
          <span>
            <GithubLogo size={20} color="#3a536b" weight="fill" />
            cameronwll
          </span>
          <span>
            <CalendarDots size={20} color="#3a536b" weight="fill" />
            Há 1 dia
          </span>
          <span>
            <ChatCircle size={20} color="#3a536b" weight="fill" /> 5 comentários
          </span>
        </PostTags>
      </PostHeader>
      <div>conteúdo</div>
    </>
  )
}
