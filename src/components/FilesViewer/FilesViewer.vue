<script setup lang="ts">
import files from '@/static/files.json'
import { onBeforeMount } from 'vue'
import { useFiltersStore } from '@/stores/filters'

// artificially add files to test scroll
onBeforeMount(() => {
  const lastFiles = files.slice(files.length - 2, files.length)
  for (let i = 0; i < 30; i++) {
    const uniqueFiles = []
    for (let f of lastFiles) {
      let uuid = f.id.concat(i.toString())
      uniqueFiles.push({ ...f, id: uuid })
    }
    files.push(...uniqueFiles)
  }
})

const filters = useFiltersStore()

const headers = [
  {
    title: 'Name',
    align: 'start',
    key: 'name'
  },
  {
    title: 'ID',
    align: 'start',
    key: 'id'
  },
  {
    title: 'Size',
    align: 'end',
    key: 'size'
  }
] as const
</script>

<template>
  <v-data-table
    class="file-table"
    fixed-header
    :headers="headers"
    :items="files"
    item-value="id"
    hide-default-footer
    items-per-page="-1"
    show-select
    :search="filters.searchQuery"
  />
</template>

<style scoped>
.file-table {
  height: 100%;
  overflow: auto;
}
</style>
