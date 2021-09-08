const { Router } = require("express");

const service = require("../Service/booksService");

const auth = require("../Middlewares/auth");

const books = Router();

books.post("/", auth, async (req, res) => {
  try {
    const { title, author, category } = req.body;

    const { _id: userId } = req.user;
    const newBook = await service.create(title, author, category, userId);

    if (newBook.error) {
      return res.status(newBook.statusCode).json({ message: newBook.message });
    }
    return res.status(201).json({ sucess: true, book: newBook });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

books.put("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, category, registrationDate } = req.body;
    const { _id: userId } = req.user;
    const updateBook = await service.update(id, title, author, category, registrationDate, userId);
    if (updateBook.error) {
      return res.status(updateBook.statusCode).json({ message: updateBook.message });
    }
    return res.status(200).json({ success: true, book: updateBook });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

books.delete("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const removeBook = await service.remove(id);
    if (!auth) return res.status(401).json({ message: "missing auth token" });
    return res.status(204).json(removeBook);
  } catch (error) {
    // console.error(error)
    return res.status(500).json({ message: error });
  }
});

module.exports = books;
