<script setup lang="ts">
const fileTypes = ['.txt', '.doc', '.png', '.jpg']
</script>

<template>
  <v-select
    name="file-type"
    label="Type"
    density="compact"
    rounded="xl"
    multiple
    variant="outlined"
    :items="fileTypes"
    :list-props="{ class: 'pt-0 pb-0' }"
  >
    <template v-slot:selection="{ index }">
      <v-chip v-if="index === 0">
        <span>...</span>
      </v-chip>
    </template>
  </v-select>
</template>
