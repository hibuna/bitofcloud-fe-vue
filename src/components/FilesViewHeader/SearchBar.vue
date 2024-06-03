<script setup lang="ts">
import { useFiltersStore } from '@/stores/filters'

const filters = useFiltersStore()
</script>

<template>
  <v-combobox
    prepend-inner-icon="mdi-magnify"
    class="search-bar mx-auto"
    density="comfortable"
    menu-icon=""
    placeholder="Search..."
    theme="light"
    variant="solo"
    rounded
    hide-details
    hide-no-data
    autofocus
    clearable
    persistent-clear
    clear-icon="mdi-close"
    return-object
    v-model="filters.searchQuery"
  ></v-combobox>
</template>

<style scoped>
.search-bar {
  min-width: 200px;
  max-width: 500px;
}
</style>
