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
  country_of_origin: attr('string'),
  description: attr('text'),
  google_id: attr('string'),
  isbn: attr('string'),
  ny_times_list: attr('string'),
  page_count: attr('number'),
  published_date: attr('datetime'),
  publisher: attr('string'),
  small_thumbnail: attr('string'),
  title: attr('string'),
});
