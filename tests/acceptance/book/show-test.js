import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import defaultScenario from 'bhippo/mirage/scenarios/default';

module('Acceptance | book | show', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  let book;

  hooks.beforeEach(function() {
    defaultScenario(server);
    book = server.db.books[0];
  });

  test('should render information for the correct book', async function(assert) {
    await visit(`books/${book.isbn}`);
    assert.dom('[data-test-book-card="title"]').hasText(book.title);
  });
});
