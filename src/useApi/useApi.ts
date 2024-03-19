import { useGithubFetch } from '@/useApi/useGithubFetch'

export function useUserInfo() {
  return useGithubFetch('/user')
}
export function useStarList(userName: string) {
  return useGithubFetch(`/users/${userName}/starred`)
}
