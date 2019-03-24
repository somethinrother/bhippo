import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

let book;

module('Integration | Components | book card', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function() {
    book = server.create('book')
    this.book = book;
    await render(hbs`{{book-card book=book}}`);
  });

  test('it renders', async function(assert) {
    assert.dom('[data-test-book-card="title"]').exists();
    assert.dom('[data-test-book-card="image"]').exists();
    assert.dom('[data-test-book-card="description"]').exists();
    assert.dom('[data-test-book-card="author"]').exists();
    assert.dom('[data-test-book-card="page-count"]').exists();
  });

  test('dynamic fields contain correct values', async function(assert) {
    assert.dom('[data-test-book-card="title"]').hasText(book.title);
    assert.dom('[data-test-book-card="image"]').hasAttribute('src', book.bookCover);
    assert.dom('[data-test-book-card="description"]').hasText(book.description);
    assert.dom('[data-test-book-card="author"]').hasText(`By: ${book.author}`);
    assert.dom('[data-test-book-card="page-count"]').hasText(`Page Count: ${book.pageCount}`);
  });
});
