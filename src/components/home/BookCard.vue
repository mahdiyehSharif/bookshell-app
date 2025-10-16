<template>
  <div>
    <div class="image"></div>
    <span class="Writer-name">{{ bookName }}</span>
    <h3 class="name"></h3>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useBookStore } from '@/store/books/books'

export default {
  data() {
    return {
      bookStore: useBookStore(),
    }
  },
  computed: {
    ...mapState(useBookStore, ['books']),

    bookName: (bookStore) => {
      return bookStore.getters.getBookByName
    },
  },
}
</script>
