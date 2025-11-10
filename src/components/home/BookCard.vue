<template>
  <div class="card">
    <div class="image">
      <img :src="book.photo" alt="icon" />
      <span class="like"></span>
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
export default {
  props: ['book'],
  computed: {
    bookGenr() {
      return this.book.genrs
    },
    writerName() {
      return this.book.writer
    },
    bookName() {
      return this.book.name
    },
    bookRate() {
      return this.book.rate
    },
  },
}
</script>

<style>
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
}
/* 
.name {
}

.writer-name {
} */
</style>
