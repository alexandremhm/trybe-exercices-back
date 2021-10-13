const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
      'SELECT id, title, author_id FROM model_example.books;',
  );
  return books;
};

const getByAuthorId = async (authorId) => {
  const [book] = await connection.execute(
      'SELECT id, title, author_id FROM model_example.books WHERE author_id=?',
      [authorId],
  );
  if (book.length === 0) {
    return null;
  };
  return book;
};


module.exports = {
  getAll,
  getByAuthorId,
};
