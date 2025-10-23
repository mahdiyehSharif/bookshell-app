<template>
  <section class="container">
    <input class="search" type="text" placeholder="Search by title, writer, or domain..." />
  </section>
  <section class="container">
    <select-writers v-model="selectedWriter"></select-writers>
  </section>
  <section class="container">
    <book-list :selected-writer="selectedWriter"></book-list>
  </section>
</template>

<script>
import SelectWriters from '../home/SelectWriters.vue'
import BookList from '../home/BookList.vue'

export default {
  data() {
    return {
      selectedWriter: '',
    }
  },
  components: { SelectWriters, BookList },
}
</script>
<style>
.search {
  width: 40%;
  border: none;
  border-radius: 1rem;
  background-color: #f1e2d4;
  color: #cfb4a3;
  padding: 1rem;
}
</style>
