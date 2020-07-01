import {
  ACTION_QUERY,
  URL,
  CORS_HEAD,
  WIKI_LESBIAN,
  FORMAT_JSON,
} from './settings';

const wikiLesbianURL = `${URL}${ACTION_QUERY}&list=categorymembers&cmlimit=500${FORMAT_JSON}${CORS_HEAD}&cmtitle=Category:${WIKI_LESBIAN}`;

export default function getWikiCategories() {
  return fetch(wikiLesbianURL)
    .then((response) => response.json())
    .then((data) => {
      const queryCategories = data.query.categorymembers;
      console.log(queryCategories);

      const onlyWikiCategory = queryCategories.reduce(function (acc, article) {
        const arrayFromReduce = [...acc];
        article.ns === 14 && arrayFromReduce.push(`${article.title}`.slice(10));
        return arrayFromReduce;
      }, []);
      console.log('onlyWikiCategory', onlyWikiCategory);

      const articlesWithoutCategory = queryCategories.reduce(function (
        acc,
        article,
      ) {
        const arrayFromReduce = [...acc];
        article.ns === 0 && arrayFromReduce.push(`${article.title}`);
        return arrayFromReduce;
      },
      []);
      console.log('reduce', articlesWithoutCategory);

      return { onlyWikiCategory, articlesWithoutCategory };
    })
    .catch((error) => console.log(`Ooops... ${error}`));
}
