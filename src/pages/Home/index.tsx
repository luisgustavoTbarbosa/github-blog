import {
  ProfileCard,
  ProfileTitle,
  ProfileContent,
  ProfileDescription,
  ProfileTags,
  PostsContainer,
  PostsHeader,
  PostsGrid,
} from './styles'
import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  Users,
} from '@phosphor-icons/react'

import { SearchForm } from './components/SearchForm'
import { PostCard } from './components/PostCard'
import { useEffect, useState } from 'react'
import { githubSearchApi, githubUserApi } from '../../lib/axios'
import { Link } from 'react-router-dom'

interface ProfileData {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  html_url: string
}

interface IssueData {
  id: number
  number: number
  title: string
  body: string
  created_at: string
}

export function Home() {
  const [profileData, setProfileData] = useState<ProfileData>(() => ({
    avatar_url: '',
    name: '',
    bio: '',
    login: '',
    company: '',
    html_url: '',
  }))

  const [followers, setFollowers] = useState(0)

  async function fetchProfileData() {
    const basicInformationResponse = await githubUserApi.get('')
    const followersResponse = await githubUserApi.get('followers')

    setProfileData(basicInformationResponse.data)
    setFollowers(followersResponse.data.length)
  }

  const [issues, setIssues] = useState<Array<IssueData>>([])

  const issuesCount = issues.length

  async function fetchSearchIssues(query = '') {
    const issuesResponse = await githubSearchApi(
      `issues?q=${query}%20repo:luisgustavoTbarbosa/github-blog`,
    )

    setIssues([...issuesResponse.data.items])
  }

  useEffect(() => {
    fetchProfileData()
    fetchSearchIssues()
  }, [])

  return (
    <div>
      <ProfileCard>
        <figure>
          <img src={profileData.avatar_url} alt="" />
        </figure>
        <ProfileContent>
          <ProfileTitle>
            <h1>{profileData.name}</h1>
            <a className="redirect-link" href={profileData.html_url}>
              GitHub
              <ArrowSquareOut size={16} color="#3294F8" weight="bold" />
            </a>
          </ProfileTitle>
          <ProfileDescription>{profileData.bio}</ProfileDescription>
          <ProfileTags>
            <span>
              <GithubLogo size={20} color="#3a536b" weight="fill" />
              {profileData.login}
            </span>
            <span>
              <Buildings size={20} color="#3a536b" weight="fill" />
              {profileData.company}
            </span>
            <span>
              <Users size={20} color="#3a536b" weight="fill" />
              {followers} seguidores
            </span>
          </ProfileTags>
        </ProfileContent>
      </ProfileCard>
      <PostsContainer>
        <PostsHeader>
          <p>Publicações</p>
          <span>{issuesCount} publicações</span>
        </PostsHeader>
        <SearchForm handleFetchIssues={fetchSearchIssues} />
        <PostsGrid>
          {issues &&
            issues.map((issue) => {
              return (
                <Link to={`/post/${issue.number}`} key={issue.id}>
                  <PostCard issue={issue} />
                </Link>
              )
            })}
        </PostsGrid>
      </PostsContainer>
    </div>
  )
}
