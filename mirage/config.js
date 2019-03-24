export default function() {
  this.get('/books');
  this.get('/books/:isbn', (schema, request) => {
    let params = request.params;
    return schema.books.findBy(params);
  })
  this.get('/genres', (schema) => {
    return schema.genres.all();
  });
}
