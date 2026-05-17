<template>
  <div class="card">
    <div class="image">
      <img class="pic" :src="book.photo" alt="icon" />
      <div class="icon">
        <heart @click="saveBook"></heart>
      </div>
    </div>
    <div class="genrs">
      <span v-for="genr in bookGenr" :key="genr">{{ genr }}</span>
    </div>
    <h2 class="name">{{ bookName }}</h2>
    <p class="writer-name">{{ writerName }}</p>
    <p class="rate">Rates: {{ bookRate }}</p>
    <div class="print-rate">
      <p>Rate this book:</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useCollectionStore } from '@/store/books/collection'
import { Heart } from 'lucide-vue-next'
export default {
  // emits: ['renderList'],
  props: ['book'],
  data() {
    return {
      savedBook: false,
      collectionStore: useCollectionStore() || [],
    }
  },
  components: { Heart },
  computed: {
    bookGenr() {
      return this.book.genrs || []
    },
    writerName() {
      return this.book.writer || ''
    },
    bookName() {
      return this.book.name || ''
    },
    bookRate() {
      return this.book.rate || null
    },
    bookPhoto() {
      return this.book.photo || ''
    },
  },
  methods: {
    ...mapActions(useCollectionStore, ['addBook']),
    ...mapActions(useCollectionStore, ['removeBook']),

    saveBook() {
      this.savedBook = !this.savedBook
      this.sendBookToShelf(this.book)
    },
    sendBookToShelf(book) {
      if (this.savedBook) {
        this.collectionStore.showCollection = true
        this.collectionStore.addBook(book)
      } else {
        this.collectionStore.removeBook(book)
        console.log('filtered')
      }
      console.log(this.collectionStore.collection)
      console.log(this.collectionStore.showCollection)
      // if (this.collectionStore.collection.lengt > 0) {
      //   // this.$emit('renderList')
      //   console.log('length: ', this.collectionStore.collection.length)
      //   this.collectionStore.showCollection = true
      // }
    },
  },
}
</script>

<style scoped>
.card {
  background-color: #fff;
  justify-items: stretch;
  text-align: center;
  height: 35rem;
  border: 1px solid #d4c0b3;
  border-radius: 1rem;
}
.genrs {
  margin-top: 2rem;
}
.genrs span {
  border: 1px solid #e1e3ed;
  border-radius: 1rem;
  background-color: #e7e7ed;
  color: #6b9ff3;
  margin: 4px;
  padding: 4px;
}

.image {
  height: 20rem;
  border-radius: 1rem;
  background-color: #f4e8df;
  display: flex;
  justify-content: space-between;
}

.pic {
  z-index: 1;
}

.icon {
  top: 5px;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #fff;
  margin: 1rem 1rem 0 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.red-heart {
  color: red;
}
</style>
