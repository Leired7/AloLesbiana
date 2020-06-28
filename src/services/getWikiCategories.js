import {
  URL,
  CORS_HEAD,
  WIKI_LESBIAN,
  FORMAT_JSON,
} from '../services/settings';

const wikiLesbianURL = `${URL}?action=query&list=categorymembers&cmlimit=500${FORMAT_JSON}${CORS_HEAD}&cmtitle=Category:${WIKI_LESBIAN}`;

export default function getWikiCategories() {
  return fetch(wikiLesbianURL)
    .then((response) => response.json())
    .then((data) => {
      const queryCategories = data.query.categorymembers;
      const searchCategories = queryCategories.map((category) => {
        if (category.title.includes('Categoría')) {
          return category.title;
        }
      });

      const removeUndefined = searchCategories.filter(
        (noCategory) => noCategory !== undefined,
      );

      const onlyWikiCategory = removeUndefined.map((category) => {
        return category.slice(10);
      });
      return onlyWikiCategory;
    })
    .catch((error) => console.log(`Ooops... ${error}`));
}
