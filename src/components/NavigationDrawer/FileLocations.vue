<script setup lang="ts">
const drawerItems = [
  {
    icon: 'mdi-file',
    name: 'Files'
  },
  {
    icon: 'mdi-clock',
    name: 'Recent'
  },
  {
    icon: 'mdi-delete',
    name: 'Bin'
  }
]
</script>

<template>
  <v-layout class="flex-column align-center">
    <v-btn text="Upload" color="primary" elevation="2" width="90%" rounded="xl" class="ma-3" />

    <v-list class="pt-0 w-100">
      <v-list-item
        class="w-100"
        v-for="(item, i) in drawerItems"
        :key="i"
        :value="item"
        color="primary"
        :prepend-icon="item.icon"
        :title="item.name"
      />
    </v-list>
  </v-layout>
</template>
