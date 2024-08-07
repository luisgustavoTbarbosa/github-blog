import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { githubIssueDataApi } from '../../lib/axios'
import {
  ArrowSquareOut,
  CalendarDots,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from '@phosphor-icons/react'
import {
  ContentContainer,
  PostHeader,
  PostTags,
  RedirectsContainer,
} from './styles'

import { createRoot } from 'react-dom/client'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function Post() {
  const { id } = useParams()
  console.log('id', id)

  const [issue, setIssue] = useState({})

  async function fetchIssueDataApi(issueId) {
    const issueResponse = await githubIssueDataApi(issueId)

    setIssue({ ...issueResponse.data })
    console.log('issueResponse', issueResponse.data)
  }

  useEffect(() => {
    fetchIssueDataApi(id)
  }, [id])

  const mainTag = document.querySelector('main')

  if (mainTag) {
    createRoot(mainTag).render(
      <Markdown
        children={issue.body}
        remarkPlugins={[remarkGfm]}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={dracula}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          },
        }}
      />,
    )
  }

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
      <ContentContainer>{issue.body}</ContentContainer>
    </>
  )
}
