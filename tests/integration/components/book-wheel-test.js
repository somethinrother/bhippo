import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

let genre;

module('Integration | Components | book wheel', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function() {
    genre = server.create('genre')
    this.genre = genre;
    await render(hbs`{{book-wheel genre=genre}}`);
  });

  test('it renders', async function(assert) {
    assert.dom(`[data-test-book-wheel="title-${genre.name}"]`).exists();
  });

  test('title is correct', async function(assert) {
    assert.dom(`[data-test-book-wheel="title-${genre.name}"]`).hasText(genre.name);
  });
});
