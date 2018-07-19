import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('veteran-resource-form', 'Integration | Component | veteran resource form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{veteran-resource-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#veteran-resource-form}}
      template block text
    {{/veteran-resource-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
