export default {
  allBooks: (state) => state.books,
  getBookById: (state) => {
    return state.books.map((book) => book.id)
  },
  getBookByName: (state) => {
    return state.books.map((book) => book.name)
  },
  getBookByWriter: (state) => {
    return state.books.map((book) => book.writer)
  },
  getGenrs: (state) => {
    return state.books.map((book) => book.genrs.map((g) => g))
  },
  getBookByRate: (state) => (rate) => {
    return state.books.map((book) => book.rate === rate)
  },
}
