const bookRepository = require('../repositories/book.repository');
const recordRepository = require('../repositories/record.repository');

module.exports = {
    insertRecord: (record) => {
        let value = record.operation == 1 ? 1 : -1;
        return bookRepository.updateBookStock(record.bookId, value).then(() =>
             recordRepository.insertRecord(record)
        )
    }
}