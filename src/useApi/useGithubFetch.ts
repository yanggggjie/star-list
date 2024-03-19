import { createFetch } from '@vueuse/core'
import useAccessToken from '@/useApi/useAccessToken'
import { useRouter } from 'vue-router'

const useGithubFetch = createFetch({
  baseUrl: 'https://api.github.com/',
  options: {
    async beforeFetch({ options }) {
      const accessToken = useAccessToken()
      const router = useRouter()

      if (accessToken.value === '') {
        router.replace('/login')
      }

      options.headers = {
        ...options.headers,
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${accessToken}`
      }
    }
  },
  fetchOptions: {
    mode: 'cors'
  }
})

export { useGithubFetch }
