import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('forms/shelter-intake-form', 'Integration | Component | forms/shelter intake form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{forms/shelter-intake-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#forms/shelter-intake-form}}
      template block text
    {{/forms/shelter-intake-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
