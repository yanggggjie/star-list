<script setup lang="ts">
console.log(import.meta.env)
const loginWithGithubURL = `https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_CLIENT_ID}`
</script>

<template>
  <a :href="loginWithGithubURL">login </a>
</template>

<style scoped></style>
