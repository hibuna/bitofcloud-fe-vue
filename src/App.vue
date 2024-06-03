<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <v-layout class="app-layout">
    <RouterView />
  </v-layout>
</template>

<style scoped>
.app-layout {
  height: 100vh;
  width: 100vw;
}
</style>

<style>
html {
  overflow: hidden !important;
}

#app {
  padding: 0;
  margin: 0;
}

* {
  user-select: none;
}
</style>
