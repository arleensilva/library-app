const bookModel =  require('../models/book.model')

const quantityPerPage = 50;


module.exports = {
    list: (title, author, edition, page = 0) => {
        let filter = {
            $and: [{}]
        };

        if (title) {
            filter.$and.push({
                title: {
                    $regex: new RegExp(title),
                    $options: 'i'
                }
            })
        }

        if (author) {
            filter.$and.push({
                author: {
                    $regex: new RegExp(author),
                    $options: 'i'
                }
            })
        }

        if (edition) {
            filter.$and.push({
                edition: {
                    $regex: new RegExp(edition),
                    $options: 'i'
                }
            })
        }

        return bookModel.find(filter)
            .skip(page * quantityPerPage)
            .limit(quantityPerPage)
            .catch(error  => {
            throw error;
        })
    },
    insertBook: book => {
        return bookModel.insertMany([book]).catch(error => {
            throw error;
        })
    },
    updateBook: (bookId, bookToUpdate) => {
        return bookModel.findByIdAndUpdate(bookId, bookToUpdate, { new: true }).catch(error => {
            throw error;
        })
    },
    updateBookStock: (bookId, value) => {
        return bookModel.findOneAndUpdate(
            { _id: bookId },
            { $inc: { stock: value } },
            { new: true }
        ).catch(error => {
            throw error;
        })
    }
}

