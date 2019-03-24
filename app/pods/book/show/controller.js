import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { authorFormatter } from 'bhippo/helpers/formatting-helpers';
import { computed } from '@ember/object';

export default Controller.extend({
  book: alias('model'),
  author: computed('book.author', function() {
    return authorFormatter(this.book.author);
  }),
});
