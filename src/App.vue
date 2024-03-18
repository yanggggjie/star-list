<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { twMerge } from 'tailwind-merge'
const route = useRoute()
const routeList = [
  {
    link: '/home',
    isActive: route.path.startsWith('/home')
  },
  {
    link: '/login',
    isActive: route.path.startsWith('/login')
  },
  {
    link: '/about',
    isActive: route.path.startsWith('/about')
  }
]
</script>

<template>
  <div :class="twMerge('flex flex-row items-center gap-10')">
    <div role="tablist" class="tabs tabs-boxed">
      <a role="tab" class="tab">Tab 1</a>
      <a role="tab" class="tab tab-active">Tab 2</a>
      <a role="tab" class="tab">Tab 3</a>
    </div>

    <RouterLink to="/home">
      <button class="btn">home</button>
    </RouterLink>

    <RouterLink to="/about">
      <button class="btn">about</button>
    </RouterLink>
    <RouterLink to="/login">
      <button class="btn">login</button>
    </RouterLink>
  </div>
  <RouterView></RouterView>
</template>

<style scoped></style>
