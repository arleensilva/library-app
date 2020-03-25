const express = require('express');
const router = express.Router();

const bookController = require('./src/controllers/book.controller');
const recordController = require('./src/controllers/record.controller');

/**
 * @swagger
 * definitions:
 *   Book:
 *     required:
 *       - title
 *       - author
 *       - edition
 *     properties:
 *       _id:
 *         type: integer
 *         format: int64
 *         description: Book Id
 *       title:
 *         type: string
 *         description: book title
 *       author:
 *         type: string
 *         description: book author
 *       edition:
 *         type: string
 *         description: book edition
 *       stock:
 *         type: number
 *         description: quantity for stock
 *         default: 0
 *   BookRecord:
 *     required:
 *       - bookId
 *       - operation
 *       - name
 *       - email
 *       - phone
 *     properties:
 *       bookId:
 *         type: integer
 *         format: int64
 *         description: Book Id
 *       operation:
 *         type: number
 *         description: Type of register data, input record (1) ou output record(2)
 *         enum:
 *           - 1
 *           - 2
 *       name:
 *         type: string
 *         description: person name
 *       email:
 *         type: string
 *         description: person email
 *       phone:
 *         type: string
 *         description: person contact phone
 */


/**
 * @swagger
 * /books:
 *    get:
 *      description: This should return all books
 *      parameters:
 *        - in: query
 *          name: title
 *          description: filter book by title
 *          type: string
 *          required: false
 *        - in: query
 *          name: author
 *          description: filter book by author
 *          type: string
 *          required: false
 *        - in: query
 *          name: edition
 *          description: filter book by description
 *          type: string
 *          required: false
 *        - in: query
 *          name: page
 *          description: page number
 *          type: number
 *          required: false
 *      responses:
 *        '200':
 *          description: A succesful response
 */
router.get('/books', bookController.list);


/**
 * @swagger
 * /books:
 *    post:
 *      description: Insert a book
 *      parameters:
 *        - in: body
 *          name: body
 *          description: Book object to update
 *          schema:
 *            type: object
 *            $ref: '#/definitions/Book'
 *      responses:
 *        '200':
 *          description: A succesful response
 */
router.post('/books', bookController.updateBook);


/**
 * @swagger
 * /books:
 *    put:
 *      description: Insert a book
 *      parameters:
 *        - in: body
 *          name: body
 *          description: Book object to insert
 *          schema:
 *            type: object
 *            $ref: '#/definitions/Book'
 *      responses:
 *        '200':
 *          description: A succesful response
 */
router.put('/books', bookController.insertBook);


/**
 * @swagger
 * /record:
 *    put:
 *      description: Register a book exit or
 *      parameters:
 *        - in: body
 *          name: body
 *          description: Register Data
 *          schema:
 *            type: object
 *            $ref: '#/definitions/BookRecord'
 *      responses:
 *        '200':
 *          description: A succesful response
 */
router.put('/record', recordController.insertRecord);

module.exports = router;