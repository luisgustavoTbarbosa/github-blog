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
  return (
    <PostCardContainer>
      <div>
        <h2>{issue.title}</h2>
        <span>{issue.created_at}</span>
      </div>
      <p>{issue.body}</p>
    </PostCardContainer>
  )
}
