<script setup lang="ts">
import SearchBar from '@/components/FilesViewHeader/SearchBar.vue'
</script>

<template>
  <v-app-bar elevation="1" title="bitofcloud">
    <template v-slot:prepend>
      <v-app-bar-nav-icon icon="mdi-cloud" readonly />
    </template>

    <SearchBar />

    <v-spacer />

    <template v-slot:append>
      <v-btn icon="mdi-dots-vertical" />
    </template>
  </v-app-bar>
</template>
