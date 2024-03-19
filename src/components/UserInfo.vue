<script setup lang="ts">
import { useUserInfo } from '@/useApi/useApi'
import { onMounted } from 'vue'

const { data, isFetching, execute } = useUserInfo()
onMounted(() => {
  execute()
})
</script>

<template>
  <div v-if="isFetching">
    <span class="loading loading-spinner loading-xs"></span>
    <span class="loading loading-spinner loading-sm"></span>
    <span class="loading loading-spinner loading-md"></span>
    <span class="loading loading-spinner loading-lg"></span>
  </div>
  <div v-else>
    {{ data }}
  </div>
</template>

<style scoped></style>
