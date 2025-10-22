<template>
  <div class="card">
    <div class="image">
      <img :src="book.photo" alt="icon" />
      <span class="like"></span>
    </div>
    <h3 class="name">{{ bookName }}</h3>
    <span class="writer-name">{{ writerName }}</span>
    <div class="rate"></div>
  </div>
</template>

<script>
export default {
  props: ['selectedwriter', 'book'],
  computed: {
    writerName() {
      return this.book.writer
    },
    bookName() {
      return this.book.name
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

.image {
  height: 20rem;
  border-radius: 1rem;
  background-color: #f4e8df;
}
</style>
