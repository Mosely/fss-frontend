import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('forms/generate-report-form', 'Integration | Component | forms/generate report form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{forms/generate-report-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#forms/generate-report-form}}
      template block text
    {{/forms/generate-report-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
