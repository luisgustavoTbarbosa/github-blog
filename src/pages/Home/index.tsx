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
import { githubUserApi } from '../../lib/axios'

interface ProfileData {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  html_url: string
}

export function Home() {
  const [profileData, setProfileData] = useState<ProfileData>({})

  async function fetchProfileData() {
    const response = await githubUserApi.get('')
    setProfileData(response.data)
  }

  useEffect(() => {
    fetchProfileData()
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
            <a href={profileData.html_url}>
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
              32 seguidores
            </span>
          </ProfileTags>
        </ProfileContent>
      </ProfileCard>
      <PostsContainer>
        <PostsHeader>
          <p>Publicações</p>
          <span>6 publicações</span>
        </PostsHeader>
        <SearchForm />
        <PostsGrid>
          <PostCard />
          <PostCard />
          <PostCard />
        </PostsGrid>
      </PostsContainer>
    </div>
  )
}
