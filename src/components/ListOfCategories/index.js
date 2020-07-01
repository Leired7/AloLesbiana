import React, { useEffect, useState } from 'react';

import getWikiCategories from 'services/getWikiCategories';
import getAllLesbianExtractImage from 'services/getAllLesbianExtractImage';

import WikiCard from 'components/WikiCard/index';

import { FLEXCENTER } from 'services/settings';

import { Link } from 'react-router-dom';

import {
  Button,
  Box,
  Columns,
  Notification,
  Progress,
} from 'react-bulma-components';

const ListofCategories = () => {
  const [lesbianCategory, setLesbianCategory] = useState([]);
  const [notCategoryArticles, setNotCategoryArticles] = useState([]);

  useEffect(function () {
    getWikiCategories()
      .then((data) => {
        setLesbianCategory(data.onlyWikiCategory);
        return getAllLesbianExtractImage(data.articlesWithoutCategory);
      })
      .then((data) => setNotCategoryArticles(data));
  }, []);

  console.log(notCategoryArticles);
  return (
    <>
      <Notification color="warning">
        Información que aparece en <strong>Wikipedia</strong>: "La siguiente
        lista contiene a las mujeres de las que es <strong>pública</strong> su
        orientación <strong>lesbiana</strong>."
      </Notification>
      <Columns breakpoint="tablet">
        {lesbianCategory.length > 0 ? (
          lesbianCategory.map((category, index) => {
            return (
              <Columns.Column key={index} size={6}>
                <Box style={FLEXCENTER}>
                  <Link to={`/lesbianas/${category}`}>
                    <Button color="dark">{category}</Button>
                  </Link>
                </Box>
              </Columns.Column>
            );
          })
        ) : (
          <Progress max={100} color="primary" size="small" />
        )}
      </Columns>
      <Columns breakpoint="tablet">
        {notCategoryArticles.length > 0 ? (
          notCategoryArticles.map(
            ({ canonicalurl, extract, image, pageid, pageimage, title }) => {
              return (
                <Columns.Column key={pageid} size={6}>
                  <WikiCard
                    canonicalurl={canonicalurl}
                    extract={extract}
                    image={image}
                    id={pageid}
                    pageimage={pageimage}
                    title={title}
                  />
                </Columns.Column>
              );
            },
          )
        ) : (
          <Progress />
        )}
      </Columns>
    </>
  );
};

export default ListofCategories;
