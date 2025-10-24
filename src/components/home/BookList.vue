<template>
  <section class="list">
    <book-card v-for="book in books" :key="book.id" :book="book"></book-card>
  </section>
</template>
<script>
import BookCard from './BookCard.vue'
import { useBookStore } from '@/store/books/books'
export default {
  props: ['writerId'],
  data() {
    return {
      books: [],
    }
  },
  components: {
    BookCard,
  },
  methods: {
    setBooksList() {
      this.books = useBookStore().allBooks
    },
  },
  watch: {
    writerId(id) {
      let updatedList = this.books.filter((book) => book.id === id)
      this.books = updatedList
    },
  },
  created() {
    console.log('mounted')
    this.setBooksList()
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
