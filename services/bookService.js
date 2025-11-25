const fileHandler = require('../utils/fileHandler');

async function getAllBooks() {
    return await fileHandler.readData();
}

async function getBookById(id) {
    const books = await fileHandler.readData();
    return books.find(b => b.id === id);
}

async function addBook(book) {
    const books = await fileHandler.readData();
    book.id = books.length ? books[books.length - 1].id + 1 : 1;
    books.push(book);
    await fileHandler.writeData(books);
    return book;
}

async function updateBook(id, updatedData) {
    const books = await fileHandler.readData();
    const index = books.findIndex(b => b.id === id);

    if (index === -1) return null;

    books[index] = { ...books[index], ...updatedData };
    await fileHandler.writeData(books);
    return books[index];
}

async function deleteBook(id) {
    const books = await fileHandler.readData();
    const newBooks = books.filter(b => b.id !== id);

    if (newBooks.length === books.length) return false;

    await fileHandler.writeData(newBooks);
    return true;
}

module.exports = { getAllBooks, getBookById, addBook, updateBook, deleteBook };
