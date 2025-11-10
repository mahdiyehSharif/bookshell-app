<template>
  <section class="list">
    <book-card v-for="book in books" :key="book.id" :book="book"></book-card>
  </section>
</template>
<script>
import BookCard from './BookCard.vue'
import { useBookStore } from '@/store/books/books'
export default {
  components: {
    BookCard,
  },
  computed: {
    books() {
      return useBookStore().allBooks || []
    },
  },
}
</script>

<style>
.list {
  width: 80%;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 2rem;
}
</style>
