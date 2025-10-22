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
    <book-list></book-list>
  </section>
</template>

<script>
import SelectWriters from './SelectWriters.vue'
import BookList from './BookList.vue'

export default {
  data() {
    return {
      selectedWriter: null,
    }
  },
  components: { SelectWriters, BookList },
}
</script>

<style>
.container {
  border-top: #8a7265;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
}

.welcome {
  border: 1px solid #ccb9ac;
  border-radius: 1rem;
  background-color: #f2ebd9;
  width: 80%;
  padding: 1rem;
}

.welcome h3 {
  color: #645047;
}
</style>
