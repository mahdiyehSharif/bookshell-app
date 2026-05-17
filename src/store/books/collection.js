import { defineStore } from 'pinia'
import actions from './actions'

export const useCollectionStore = defineStore('collection', {
  state: () => ({
    collection: [],
    showCollection: false,
  }),
  actions,
})
