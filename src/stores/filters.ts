import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('filters', {
  state: () => {
    return {
      searchQuery: undefined as string | undefined
    }
  }
})
