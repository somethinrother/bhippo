export default function() {
  this.get('/books');
  this.get('/books/:isbn', (schema, request) => {
    let isbn = request.params.isbn;
    return schema.books.find(isbn);
  })
  this.get('/genres', (schema) => {
    return schema.genres.all();
  });
}
