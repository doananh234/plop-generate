import { post } from './utils';

export async function getIconCategoriesApi() {
  return post('/functions/getIconCategories');
}
