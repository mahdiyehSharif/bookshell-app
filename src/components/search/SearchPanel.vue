<template>
  <header class="header">
    <h2>Search Our Library</h2>
    <p>Find books by title, writer or gener</p>
  </header>
  <main>
    <section class="container">
      <input
        class="search"
        v-model="searchInput"
        type="text"
        placeholder="Search by title, writer, or gener..."
      />
    </section>
    <section class="container">
      <select-writers v-model="id"></select-writers>
    </section>
    <section class="container">
      <book-list :writer-id="id" :search-input="searchInput"></book-list>
    </section>
  </main>
</template>

<script>
import SelectWriters from '../home/SelectWriters.vue'
import BookList from '../home/BookList.vue'

export default {
  data() {
    return {
      id: null,
      searchInput: '',
    }
  },
  components: { SelectWriters, BookList },
}
</script>
<style scoped>
.header {
  text-align: center;
  margin-top: 3rem;
}

.header h2 {
  color: #4c3329;
}

.search {
  width: 40%;
  border: none;
  border-radius: 1rem;
  background-color: #f1e2d4;
  color: #cfb4a3;
  padding: 1rem;
  outline: none;
}
</style>
