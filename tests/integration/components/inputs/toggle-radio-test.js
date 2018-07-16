import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('inputs/toggle-radio', 'Integration | Component | inputs/toggle radio', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{inputs/toggle-radio}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#inputs/toggle-radio}}
      template block text
    {{/inputs/toggle-radio}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
