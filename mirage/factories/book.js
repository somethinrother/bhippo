import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  author() {
    return faker.name.firstName();
  },
  averageRating() {
    let rating = Math.floor(Math.random() * Math.floor(6));
    faker.seed(rating);
    return faker.random.number();
  },
  bookCover() {
    return faker.image.imageUrl();
  },
  description() {
    return faker.lorem.paragraph();
  },
  isbn() {
    return faker.random.number();
  },
  pageCount() {
    return faker.random.number();
  },
  publisher() {
    return faker.company.companyName();
  },
  smallThumbnail() {
    return faker.image.imageUrl();
  },
  title() {
    return faker.lorem.word();
  },
});
