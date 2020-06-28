import { URL, CORS_HEAD, FORMAT_JSON } from './settings';

export default function getAllLesbianExtractImage(category) {
  const categoryExtractFetch = category.map((wikiCategoryMember) => {
    return fetch(
      `${URL}?action=query&prop=extracts|pageimages|info&pithumbsize=200&exintro&explaintext&exsentences=3&inprop=url&redirects=1&${CORS_HEAD}${FORMAT_JSON}&titles=${wikiCategoryMember}`,
    )
      .then((res) => res.json())
      .catch((error) => console.log(`${error}`));
  });

  const coños = Promise.all(categoryExtractFetch).then((data) => {
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

localStorage.clear();
