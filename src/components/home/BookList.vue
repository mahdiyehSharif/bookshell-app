<template>
  <section class="list">
    <book-card
      v-for="book in books"
      :key="book.id"
      :selected-writer="selectedWriter"
      :book="book"
    ></book-card>
  </section>
</template>
<script>
import BookCard from './BookCard.vue'
import { useBookStore } from '@/store/books/books'
export default {
  data() {
    return {
      books: useBookStore().allBooks,
    }
  },
  components: {
    BookCard,
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
