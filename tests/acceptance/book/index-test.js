import { module, test } from 'qunit';
import { visit, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import defaultScenario from 'bhippo/mirage/scenarios/default';

module('Acceptance | book | index', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    defaultScenario(server);
  });

  test('should render one book wheel for each genre', async function(assert) {
    const genres = server.db.genres;
    await visit('/');
    genres.forEach(function(genre) {
      assert.dom(`[data-test-book-wheel="title-${genre.name}"]`).hasText(genre.name);
    });
    assert.equal(findAll('[data-test-book-wheel="wheel"]').length, genres.length)
  });

  test('a given book wheel should contain all books in its genre', async function(assert) {
    const genre = server.db.genres[0];
    await visit('/');
    assert.dom(`[data-test-book-wheel="title-${genre.name}"]`).hasText(genre.name);
    genre.bookIds.forEach(function(bookId) {
      let book = server.db.books.find(bookId);
      assert.dom(`[data-test-book-card="title-${book.title}"]`).hasText(book.title);
    });
  });
});
