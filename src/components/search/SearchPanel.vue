<template>
  <section class="container">
    <div class="welcome">
      <h3>Welcome back, mahdiyeh!</h3>
      <span>Explore books in your favorite domain and build your collection.</span>
    </div>
  </section>
  <section class="container">
    <select-writers v-model="selectedWriter"></select-writers>
  </section>
  <section class="container">
    <book-list :selected-writer="selectedWriter"></book-list>
  </section>
</template>

<script>
import SelectWriters from './SelectWriters.vue'
import BookList from './BookList.vue'

export default {
  data() {
    return {
      selectedWriter: '',
    }
  },
  components: { SelectWriters, BookList },
  // watch: {
  //   selectedWriter(val) {

  //   }
  // },
}
</script>
