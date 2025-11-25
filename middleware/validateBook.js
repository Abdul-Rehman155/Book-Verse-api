function validateBook(req, res, next) {
    const { title, author, publishedYear } = req.body;

    if (!title || !author) {
        return res.status(400).json({ message: "Title and author are required" });
    }

    if (publishedYear && (publishedYear < 1000 || publishedYear > new Date().getFullYear())) {
        return res.status(400).json({ message: "Invalid publishedYear" });
    }

    next();
}

module.exports = validateBook;
