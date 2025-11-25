const bookService = require('../services/bookService');

exports.getAllBooks = async (req, res) => {
    const books = await bookService.getAllBooks();
    res.json(books);
};

exports.getBookById = async (req, res) => {
    const id = Number(req.params.id);
    const book = await bookService.getBookById(id);

    if (!book) return res.status(404).json({ message: "Book not found" });

    res.json(book);
};

exports.createBook = async (req, res) => {
    const newBook = await bookService.addBook(req.body);
    res.status(201).json(newBook);
};

exports.updateBook = async (req, res) => {
    const id = Number(req.params.id);
    const updatedBook = await bookService.updateBook(id, req.body);

    if (!updatedBook) return res.status(404).json({ message: "Book not found" });

    res.json(updatedBook);
};

exports.deleteBook = async (req, res) => {
    const id = Number(req.params.id);
    const result = await bookService.deleteBook(id);

    if (!result) return res.status(404).json({ message: "Book not found" });

    res.json({ message: "Book deleted successfully" });
};
