import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import { computed } from '@ember/object';
import { authorFormatter } from 'bhippo/helpers/formatting-helpers';

export default Component.extend({
  author: computed('book.author', function() {
    return authorFormatter(this.book.author)
  }),
  bookCover: alias('book.bookCover'),
  pageCount: alias('book.pageCount'),
  title: alias('book.title'),
  description: alias('book.description')
});
