<script setup lang="ts">
import TypeFilter from '@/components/FilesViewer/FilterBar/TypeFilter.vue'
</script>

<template>
  <v-layout class="flex-row">
    <TypeFilter class="filter-select type-filter" />
  </v-layout>
</template>

<style scoped>
.type-filter {
  padding: 5px 20px 0;
  height: 50px;
  max-width: 150px;
}
</style>
