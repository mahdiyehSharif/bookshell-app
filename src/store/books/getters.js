export default {
  allBooks: (state) => state.books,
  getBookById: (state) => (bookId) => {
    return state.books.find((book) => book.id === bookId)
  },
  getBookByWriter: (state) => (writer) => {
    return state.books.find((book) => book.writer === writer)
  },
  getBookByName: (state) => (bookName) => {
    return state.books.find((book) => book.name === bookName)
  },
  getBookByRate: (state) => (rate) => {
    return state.books.find((book) => book.rate === rate)
  },
}
