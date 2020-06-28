import {
  URL,
  CORS_HEAD,
  WIKI_LESBIAN,
  FORMAT_JSON,
} from '../services/settings';

const wikiLesbianURL = `${URL}?action=query&list=categorymembers&cmlimit=500${FORMAT_JSON}${CORS_HEAD}&cmtitle=Category:${WIKI_LESBIAN}`;
console.log(wikiLesbianURL);

export default function getWikiCategories() {
  return fetch(wikiLesbianURL)
    .then((response) => response.json())
    .then((data) => {
      const queryCategories = data.query.categorymembers;
      console.log(queryCategories);

      const searchCategories = queryCategories.filter(function (category) {
        return category.ns === 14;
      });

      const onlyWikiCategory = searchCategories.map((category) => {
        return category.title.slice(10);
      });

      return onlyWikiCategory;
    })
    .catch((error) => console.log(`Ooops... ${error}`));
}
