import { useStorage } from '@vueuse/core'

export default function useAccessToken() {
  const access_token = useStorage('access_token', '')
  return access_token
}
