import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { PostCardContainer } from './styles'

interface IssueData {
  title: string
  body: string
  created_at: string
}

interface PostCardProps {
  issue: IssueData
}

export function PostCard({ issue }: PostCardProps) {
  const createdDateFormatted = format(
    issue.created_at,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )

  const createdDateRelativeToNow = formatDistanceToNow(issue.created_at, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <PostCardContainer>
      <div>
        <h2>{issue.title}</h2>
        <time title={createdDateFormatted} dateTime={issue.created_at}>
          {createdDateRelativeToNow}
        </time>
      </div>
      <p>{issue.body}</p>
    </PostCardContainer>
  )
}
