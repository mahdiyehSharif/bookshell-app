export default {
  addBook(book) {
    this.collection.push(book)
  },
  removeBook(book) {
    this.collection = this.collection.filter((b) => b.id !== book.id)
  },
}
