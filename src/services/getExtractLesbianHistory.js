import {
  ACTION_QUERY,
  URL,
  CORS_HEAD,
  FORMAT_JSON,
  HISTORY_ARTICLES_WIKIPEDIA,
} from 'services/settings';

const requestHistory = HISTORY_ARTICLES_WIKIPEDIA.map((name) => {
  return fetch(
    `${URL}${ACTION_QUERY}&prop=extracts|pageimages|info&exsentences=3&pithumbsize=200&exintro&explaintext&inprop=url&redirects=1&${CORS_HEAD}${FORMAT_JSON}&titles=${name}`,
  )
    .then((res) => res.json())
    .catch((error) => console.log(`${error}`));
});
//POSIBLE NUEVA BÚSQUEDA PARA QUITAR UN FETCH: &prop=extracts|pageimages|info&pithumbsize=400&exintro&explaintext&inprop=url&redirects=

export default function getExtractLesbianHistory() {
  const coños = Promise.all(requestHistory).then((data) => {
    const eureka = data;
    const allInfo = eureka.map((element) => {
      const queryObject = element.query.pages;

      const queryKeys = Object.keys(queryObject);
      const queryPage = queryKeys[0];

      const queryResultObject = queryObject[`${queryPage}`];

      const {
        pageid,
        title,
        extract,
        canonicalurl,
        pageimage,
      } = queryResultObject;

      const image =
        queryResultObject &&
        queryResultObject.pageimage &&
        queryResultObject.thumbnail.source;

      return { pageid, title, extract, image, canonicalurl, pageimage };
    });
    return allInfo;
  });
  return coños;
}
