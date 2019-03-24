import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('should render the footer', async function(assert) {
    await visit('/');
    assert.dom('[data-test-footer="bar"]').exists();
  });
});
