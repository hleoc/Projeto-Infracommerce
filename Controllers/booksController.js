const { Router } = require("express");

const service = require("../Service/booksService");

const auth = require("../Middlewares/auth");

const books = Router();

books.post("/", auth, async (req, res) => {
  try {
    const { title, author, category } = req.body;

    const { _id: userId } = req.user;
    const newBook = await service.create(
      title,
      author,
      category,
      userId,
    );

    if (newBook.error) {
      return res.status(newBook.statusCode).json({ message: newBook.message });
    }
    return res.status(201).json({ sucess: true, book: newBook });
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error });
  }
});

module.exports = books;
