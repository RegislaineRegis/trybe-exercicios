const { Book } = require('../models/book');

const getAll = async () => {
  const books = await Book.findAll({ 
    order: [['title', 'ASC']],
  });
  return books;
};

const getById = async (id) => {
  const books = await Book.findByPk(id);
  return books;
}

const create = async ({ title, author, pageQuantity }) => {
  const book = await Book.create({ title, author, pageQuantity });
  return book;
};

const update = async (id, { title, author, pageQuantity }) => {
  const [updated] = await Book.update(
    { 
      title, 
      author, 
      pageQuantity, 
    }, 
    { where: { id } },
  );

  return updated;
};

const remove = async (id) => {
  const removed = await Book.destroy(
    { where: { id } },
  );

  return removed;
};

const getByAuthor = async (author) => {
  const books = await Book.findAll({ 
    where: { author },
    order: [['title', 'ASC']],
  });
  return books;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
};