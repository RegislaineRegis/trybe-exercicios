const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

const author = require('./models/Author');
const book = require('./models/Books');

app.get('/authors', async (req, res) => {
  const authors = await author.getAll();

  return res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await book.getByAuthorId(author_id)
  : await book.getAll();

  res.status(200).json(books);
});

app.get('/authors/:id', async (req, res) => {
	const { id } = req.params;

	const authors = await author.findById(id);

	if (!authors) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(authors);
});

app.get('/books/:id', async (req, res) => {
	const { id } = req.params;

	const books = await book.findByIdBook(id);

	if (!books) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(books);
});

app.post('/authors', async (req, res) => {
	const { first_name, middle_name, last_name } = req.body;

	if (!author.isValid(first_name, middle_name, last_name)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await author.create(first_name, middle_name, last_name);

	res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.post('/books', async (req, res) => {
	const { title, author_id } = req.body;

	if (!book.isValid(title, author_id)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await book.create(title, author_id);

	res.status(201).json({ message: 'Livro criado com sucesso! '});
});

/*
app.get('/books', async (req, res) => {
  const books = await book.getAll();

  return res.status(200).json(books);
});
*/

app.listen(PORT, () => console.log(`to OUVINDO na porta ${PORT}`));