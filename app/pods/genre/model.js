import Model from 'ember-data/model';
import { hasMany } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default Model.extend({
  // RELATIONSHIPS
  books: hasMany('book'),

  // ATTRIBUTES
  name: attr('string')
});
