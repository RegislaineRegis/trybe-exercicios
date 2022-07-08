const BooksService = require('../Services/BooksService');

const getAll = async (req, res) => {
  const { author } = req.query;

  let books;

  if (author) {
    books = await BooksService.getByAuthor(author);
  } else {
    books = await BooksService.getAll();
  }

  res.status(200).json(books);
};

const getById = async (req, res) => {
  const book = await BooksService.getById(req.params.id);

  if (!book) return res.status(400).json({ message: 'Book not found'});

  res.status(200).json(book);
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const book = await BooksService.create({ title, author, pageQuantity });

  res.status(201).json(book);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  
  const updatedUser = await BooksService.update(id, { title, author, pageQuantity });

  if (!updatedUser) return res.status(404).json({ message: 'Book not found' });

  res.status(201).json({ message: 'Book updated' });
};

const remove = async (req, res) => {
  const { id } = req.params;

  const removed = await BookService.remove(id);

  if (!removed) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json({ message: 'Book removed' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}