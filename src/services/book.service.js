const bookRepository = require('../repositories/book.repository')

module.exports = {
    list:(title, author, edition, page) => {
        let numPage = page ? page -1 : 0;

        return bookRepository.list(title, author, edition, numPage);
    },
    insertBook: book => {
        return bookRepository.insertBook(book);
    },
    updateBook: (bookId, bookToUpdate) => {
        return bookRepository.updateBook(bookId, bookToUpdate);
    }
}