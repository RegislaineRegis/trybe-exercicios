const connection = require('./connection');
const author = require('./Author');

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;';

  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM model_example.books');
  
  return books.map((id,title, author_id) => ({
    id,
    title,
    authorId: author_id,
  }));
}

/*
Busca uma pessoa autora específica, a partir do seu ID
@param {String} id ID da pessoa autora a ser recuperado
*/

const findByIdBook = async (id) => {
	// Repare que substituímos o id por `?` na query.
	// Depois, ao executá-la, informamos um array com o id para o método `execute`.
	// O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
	const query = 'SELECT * FROM model_example.books WHERE id = ?'
	const [ bookData ] = await connection.execute(query, [id]);

	if (bookData.length === 0) return null;

	// Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
	return bookData.map(({id, title, author_id}) => ({
    id,
    title,
    authorId: author_id,
  }))[0];
};

const isValid = async (title, authorId) => {
	if (!title || typeof title !== 'string' || title.length < 3) return false;
	if (!authorId ||typeof authorId !== 'number' || !(await author.findById(authorId))) return false;
	
	return true;
};

const create = async (title, authorId) => connection.execute(
	'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
	[title, authorId],
);

module.exports = {
  getAll,
  getByAuthorId,
  findByIdBook,
  isValid,
  create,
}