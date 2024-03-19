<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

console.log(import.meta.env)
const loginWithGithubURL = `https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_CLIENT_ID}`
</script>

<template>
  <div :class="twMerge('flex flex-row items-center justify-center', 'mt-10')">
    <a :href="loginWithGithubURL"> <button class="btn btn-accent">login with github</button> </a>
  </div>
</template>

<style scoped></style>
