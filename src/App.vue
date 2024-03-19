<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue'
const route = useRoute()
const router = useRouter()
const routeList = computed(() => {
  return [
    {
      title: 'Home',
      href: '/',
      isActive: route.path === '/'
    },
    {
      title: 'Login',
      href: '/login',
      isActive: route.path.startsWith('/login')
    },
    {
      title: 'About',
      href: '/about',
      isActive: route.path.startsWith('/about')
    }
  ]
})

function handleTabChange(href: string) {
  router.push(href)
}
</script>

<template>
  <div role="tablist" class="tabs tabs-boxed">
    <template v-for="item in routeList" :key="item.href">
      <button
        @click="handleTabChange(item.href)"
        role="tab"
        :class="twMerge('tab', item.isActive ? 'tab-active' : '')"
      >
        {{ item.title }}
      </button>
    </template>
  </div>
  <RouterView></RouterView>
</template>

<style scoped></style>
