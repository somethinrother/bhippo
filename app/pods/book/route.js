import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('genre', { include: 'books' })
                     .then(results => results.filter((genre) => {
                       return genre.name !== 'misc';
                     }))
  }
});
