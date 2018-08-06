import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('inputs/multiselect-checkbox', 'Integration | Component | inputs/multiselect checkbox', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{inputs/multiselect-checkbox}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#inputs/multiselect-checkbox}}
      template block text
    {{/inputs/multiselect-checkbox}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
