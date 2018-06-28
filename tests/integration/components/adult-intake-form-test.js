import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('adult-intake-form', 'Integration | Component | adult intake form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{adult-intake-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#adult-intake-form}}
      template block text
    {{/adult-intake-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
