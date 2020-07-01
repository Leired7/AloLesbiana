import React from 'react';

import { Route } from 'react-router-dom';

import ListOfCategories from 'components/ListOfCategories';
import ListOfArticles from 'components/ListOfArticles';
import ListOfLesbians from 'components/ListOfLesbians';
import Purpose from 'components/Purpose';

const Main = () => {
  return (
    <main>
      <Route path="/" exact component={Purpose} />
      <Route path="/historia" exact component={ListOfArticles} />
      <Route exact path="/lesbianas" component={ListOfCategories} />
      <Route
        exact
        path="/lesbianas/:category"
        component={ListOfLesbians}
      />{' '}
      {/* <Route path="/películas" component={ListOfCards} /> */}
    </main>
  );
};
export default Main;
