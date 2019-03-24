import { Factory, faker, trait } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.lorem.word();
  },

  withBooks: trait({
    afterCreate(genre, server) {
      server.createList('book', 10, { genre });
    }
  })
});
