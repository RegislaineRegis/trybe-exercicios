const express = require('express');

const app = express();
const author = require('./models/author');
const Book = require('./models/book');

app.get('/authors', async (req, res) => {
	const authors = await author.getAll();

	res.status(200).json(authors);
});
/*
app.get('/books', async (req, res) => {
	const books = await book.getAllBooks();

	res.status(200).json(books);
});
*/
app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAllBooks();

  res.status(200).json(books);
});

app.get('/authors:id', async (req, res) => {
	const { id } = req.params;

	const author = await Author.findById(id);

	if (!author) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(author);
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});