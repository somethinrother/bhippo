import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Component.extend({
  author: computed('book.author', function() {
    const author = this.book.author;
    if (author.includes('[')) {
      return JSON.parse(author).join(', ')
    }
    return this.book.author;
  }),
  bookCover: alias('book.bookCover'),
  pageCount: alias('book.pageCount'),
  title: alias('book.title'),
});
