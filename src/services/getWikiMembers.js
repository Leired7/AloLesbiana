import { URL, CORS_HEAD, FORMAT_JSON } from './settings';

const wikiURLCategorymembers = `${URL}?action=query&list=categorymembers&cmlimit=500${FORMAT_JSON}&cmtitle=Category:`;

export default function getWikimembers(category) {
  console.log('wikimember');
  console.log('wm', category);

  return fetch(`${wikiURLCategorymembers}${category}${CORS_HEAD}`)
    .then((res) => res.json())
    .then((data) => {
      const queryNames = data.query.categorymembers;
      const womenNames = queryNames.map((name) => {
        return name.title;
      });
      console.log('wikimember', womenNames);

      localStorage.setItem('ListOfNames', JSON.stringify(womenNames));

      return womenNames;
    })
    .catch((error) => console.log(`Oooops ... ${error}`));
}
