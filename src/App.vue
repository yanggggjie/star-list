<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { twMerge } from 'tailwind-merge'
</script>

<template>
  <div :class="twMerge('flex flex-row items-center gap-10')">
    <RouterLink to="/home">home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
    <RouterLink to="/login">login</RouterLink>
  </div>
  <RouterView></RouterView>
</template>

<style scoped></style>
