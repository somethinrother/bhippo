import Model from 'ember-data/model';
import { belongsTo } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default Model.extend({
  // RELATIONSHIPS
  genre: belongsTo('genre'),

  // ATTRIBUTES
  author: attr('string'),
  averageRating: attr('number'),
  bookCover: attr('string'),
  description: attr('string'),
  isbn: attr('string'),
  pageCount: attr('number'),
  publisher: attr('string'),
  smallThumbnail: attr('string'),
  title: attr('string'),
});
