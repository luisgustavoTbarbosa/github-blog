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

import avatarImage from '../../assets/avatar.png'
import { SearchForm } from './components/SearchForm'
import { PostCard } from './components/PostCard'

export function Home() {
  return (
    <div>
      <ProfileCard>
        <figure>
          <img src={avatarImage} alt="" />
        </figure>
        <ProfileContent>
          <ProfileTitle>
            <h1>Cameron Williamson</h1>
            <a href="">
              GitHub
              <ArrowSquareOut size={16} color="#3294F8" weight="bold" />
            </a>
          </ProfileTitle>
          <ProfileDescription>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </ProfileDescription>
          <ProfileTags>
            <span>
              <GithubLogo size={20} color="#3a536b" weight="fill" />
              cameronwll
            </span>
            <span>
              <Buildings size={20} color="#3a536b" weight="fill" />
              Rocketseat
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
