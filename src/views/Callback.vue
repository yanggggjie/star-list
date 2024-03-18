<script setup lang="ts">
import { useFetch, useUrlSearchParams } from '@vueuse/core'
import { useStorage } from '@vueuse/core'
import { onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const params = useUrlSearchParams('history')
const url = import.meta.env.VITE_BASE_URL + '/api/code2token' + `?code=${params.code}`
const router = useRouter()

const access_token = useStorage('access_token', '')

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
  <div>in callback</div>
  <div v-if="isFetching">waiting...</div>
</template>

<style scoped></style>
