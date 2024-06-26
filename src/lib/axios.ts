import axios from 'axios'

export const githubUserApi = axios.create({
  baseURL: 'https://api.github.com/users/luisgustavoTbarbosa',
})

export const githubSearchApi = axios.create({
  baseURL: 'https://api.github.com/search',
})

export const githubIssueDataApi = axios.create({
  baseURL:
    'https://api.github.com/repos/luisgustavoTbarbosa/github-blog/issues/4',
})
