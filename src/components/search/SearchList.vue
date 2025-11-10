<template>
  <section class="list" v-if="searchFound">
    <book-card v-for="book in renderedNewList" :key="book.id" :book="book"></book-card>
  </section>
</template>
<script>
import BookCard from '../home/BookCard.vue'
import { useBookStore } from '@/store/books/books'
export default {
  props: ['writerId', 'searchInput'],

  data() {
    return {
      searchFound: false,
      filteredItems: [],
      comparedVals: [],
      renderedNewList: [],
    }
  },

  components: {
    BookCard,
  },

  computed: {
    books() {
      return useBookStore().allBooks || []
    },
  },

  methods: {
    clearList() {
      this.renderedNewList = []
    },
    checkInput(watchedVal) {
      const filteredBooks = this.filteredItems.filter(
        (book) => book.name.includes(watchedVal) || book.writer.includes(watchedVal),
      )
      this.renderedNewList = [...filteredBooks]
      this.searchFound = true
    },
  },

  watch: {
    writerId(id) {
      if (!id) {
        this.filteredItems = this.books
        return
      }
      const booksList = this.books
      const updatedList = booksList.filter((book) => book.id === id)
      this.renderedNewList = updatedList || []
      this.searchFound = true
    },

    searchInput(newVal) {
      let val = ''
      if (newVal) {
        val += newVal
        this.valChanged = true
        this.checkInput(val)
      }
    },
  },

  created() {
    const allBooks = this.books || []
    this.filteredItems = allBooks
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
