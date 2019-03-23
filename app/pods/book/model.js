import Model from 'ember-data/model';
import { belongsTo } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default Model.extend({
  // RELATIONSHIPS
  genre: belongsTo('genre'),

  // ATTRIBUTES
  author: attr('string'),
  average_rating: attr('number'),
  book_cover: attr('string'),
  description: attr('string'),
  isbn: attr('string'),
  ny_times_list: attr('string'),
  page_count: attr('number'),
  publisher: attr('string'),
  small_thumbnail: attr('string'),
  title: attr('string'),
});
