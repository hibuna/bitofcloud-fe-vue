<script setup lang="ts">
import NavigationDrawer from '@/components/NavigationDrawer/NavigationDrawer.vue'
import FilesHeader from '@/components/FilesViewHeader/FilesViewHeader.vue'
import FilesViewer from '@/components/FilesViewer/FilesViewer.vue'
import BreadCrumb from '@/components/FilesViewer/BreadCrumb.vue'
import FilterBar from '@/components/FilesViewer/FilterBar/FilterBar.vue'
</script>

<template>
  <FilesHeader />
  <NavigationDrawer />
  <v-main>
    <v-layout class="flex-column h-100 bg-white">
      <BreadCrumb />
      <FilterBar />
      <FilesViewer />
    </v-layout>
  </v-main>
</template>

<style scoped>
* {
  user-select: none;
}
</style>
