<template>
  <book-open class="icon"></book-open>
  <div>
    <h3>Your bookshelf is empty</h3>
  </div>
  <div>
    <p>Start adding books from the Home or search tabs.</p>
  </div>
  <div class="container">
    <base-button darkMode="true">Browse Books</base-button>
    <base-button>Searh Library</base-button>
  </div>
</template>

<script>
import { BookOpen } from 'lucide-vue-next'
export default {
  components: {
    BookOpen,
  },
}
</script>

<style scoped>
.container {
  display: flex;
}

h3 {
  color: #54311d;
}

.icon {
  color: #896e60;
  width: 4rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0 0 0;
}
</style>
