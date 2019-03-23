import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Components | footer bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{footer-bar}}`);

    assert.dom('[data-test-footer="bar"]').exists();
    assert.dom('[data-test-footer="image"]').exists();
  });
});
