<template>
  <section class="list">
    <book-card v-for="book in books" :key="book.id" :book="book"></book-card>
  </section>
</template>
<script>
import BookCard from './BookCard.vue'
import { useBookStore } from '@/store/books/books'
export default {
  props: ['selected-writer'],
  data() {
    return {
      books: useBookStore().allBooks,
    }
  },
  components: {
    BookCard,
  },
  methods: {
    selectWriter() {
      this.books.filter((book) => book.writer === this.selectWriter)
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
