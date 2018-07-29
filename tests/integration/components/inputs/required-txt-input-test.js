import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('inputs/required-txt-input', 'Integration | Component | inputs/required txt input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{inputs/required-txt-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#inputs/required-txt-input}}
      template block text
    {{/inputs/required-txt-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
