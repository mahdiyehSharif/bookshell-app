<template>
  <header class="header">
    <h2>My Personal Library</h2>
    <p>0 Books in your collection</p>
  </header>
  <main>
    <section v-if="showCollection" class="list">
      <book-card v-for="item in collection" :key="item.id"></book-card>
    </section>
    <section v-else class="empty">
      <empty-shelf></empty-shelf>
    </section>
  </main>
</template>

<script>
import EmptyShelf from './EmptyShelf.vue'
import BookCard from '../home/BookCard.vue'
import { useCollectionStore } from '@/store/books/collection'
export default {
  components: {
    EmptyShelf,
    BookCard,
  },
  computed: {
    collection() {
      let collection = useCollectionStore().collection
      return collection || []
    },
    showCollection() {
      let showCollection = useCollectionStore().showCollection
      return showCollection
    },
  },
  methods: {
    renderCollection() {
      console.log('render collection')
    },
  },
  watch: {
    showCollection(val) {
      if (val) {
        this.renderCollection()
      }
    },
  },
}
</script>

<style scoped>
main {
  background-color: #f1e5d7;
  border: 1px dashed #b79d8d;
  margin: 2rem 15%;
}

.header {
  text-align: center;
  margin-top: 3rem;
}

.header h2 {
  color: #4c3329;
}

.empty {
  text-align: center;
  align-items: center;
  margin: auto;
}
</style>
