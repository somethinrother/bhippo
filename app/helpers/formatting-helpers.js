export function authorFormatter(authors) {
  if (authors.includes('[')) {
    return JSON.parse(authors).join(', ')
  }
  return authors;
}
