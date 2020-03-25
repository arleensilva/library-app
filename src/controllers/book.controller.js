const bookService = require('../services/book.service');

module.exports = {
    list: (req, res) => {
        const title = req.query.title;
        const author = req.query.author;
        const edition = req.query.edition;
        const page = req.query.page;

        return bookService.list(title, author, edition, page).then(response => {
            return res.json(response);
        }).catch(error => {
            if(error && error.statusCode){
                res.status(error.statusCode).json(error)
            } else {
                res.json(error);
            }
        })
    },
    insertBook: (req, res) => {
        const book = req.body;

        return bookService.insertBook(book).then(response => {
            return res.json(response);
        }).catch(error => {
            if(error && error.statusCode){
                res.status(error.statusCode).json(error)
            } else {
                res.json(error);
            }
        })
    },
    updateBook: (req, res) => {
        const bookId = req.body._id;
        const bookToUpdate = req.body;

        return bookService.updateBook(bookId, bookToUpdate).then(response => {
            return res.json(response);
        }).catch(error => {
            if(error && error.statusCode){
                res.status(error.statusCode).json(error)
            } else {
                res.json(error);
            }
        })
    }
}