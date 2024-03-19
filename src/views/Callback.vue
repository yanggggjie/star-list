<script setup lang="ts">
import { useFetch, useUrlSearchParams } from '@vueuse/core'
import { useStorage } from '@vueuse/core'
import { onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import useAccessToken from '@/useApi/useAccessToken'

const params = useUrlSearchParams('history')
const url = import.meta.env.VITE_BASE_URL + '/api/code2token' + `?code=${params.code}`
const router = useRouter()

const access_token = useAccessToken()

const { data, isFetching, execute } = useFetch(url, {
  method: 'GET'
}).json()

onMounted(() => {
  if (access_token.value !== '') {
    console.log('already has token', 'go index')
    router.replace('/')
  } else {
    execute()
  }
})

watch(data, () => {
  if ('access_token' in data.value) {
    access_token.value = data.value.access_token as string
    router.replace('/')
  } else {
    console.log('error', data.value)
  }
})
</script>

<template>
  <div v-if="isFetching">
    <span class="loading loading-spinner loading-xs"></span>
    <span class="loading loading-spinner loading-sm"></span>
    <span class="loading loading-spinner loading-md"></span>
    <span class="loading loading-spinner loading-lg"></span>
  </div>
</template>

<style scoped></style>
