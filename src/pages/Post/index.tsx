import { Link, useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
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

import { createRoot, Root } from 'react-dom/client'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface IssueType {
  body: string | undefined
  title: string | undefined
  user: {
    login: string | undefined
  }
  created_at: string
}

export function Post() {
  const { id } = useParams()
  const [issue, setIssue] = useState({} as IssueType)
  const rootRef = useRef<Root | null>(null)

  async function fetchIssueDataApi(issueId: string) {
    const issueResponse = await githubIssueDataApi(issueId)

    setIssue({ ...issueResponse.data })
  }

  useEffect(() => {
    if (id) {
      fetchIssueDataApi(id)
    }
  }, [id])

  useEffect(() => {
    const mainTag = document.querySelector('main')
    if (mainTag) {
      if (!rootRef.current) {
        rootRef.current = createRoot(mainTag)
      }

      rootRef.current.render(
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            code(props) {
              const { children, className, ...rest } = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter language={match[1]} style={dracula}>
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            },
          }}
        >
          {issue.body}
        </Markdown>,
      )
    }
  }, [issue.body])

  function formattedDate(date: string) {
    if (!date) {
      return ''
    }

    const createdDateRelativeToNow = formatDistanceToNow(date, {
      locale: ptBR,
      addSuffix: true,
    })

    return createdDateRelativeToNow
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
        <h1>{issue.title}</h1>
        <PostTags>
          <span>
            <GithubLogo size={20} color="#3a536b" weight="fill" />
            {issue.user && issue.user.login}
          </span>
          <span>
            <CalendarDots size={20} color="#3a536b" weight="fill" />
            {formattedDate(issue.created_at)}
          </span>
          <span>
            <ChatCircle size={20} color="#3a536b" weight="fill" /> 5 comentários
          </span>
        </PostTags>
      </PostHeader>
      <ContentContainer />
    </>
  )
}
