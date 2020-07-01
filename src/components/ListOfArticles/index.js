import React, { useEffect, useState } from 'react';

import WikiCard from 'components/WikiCard';

import { Columns, Box, Progress } from 'react-bulma-components';

import getExtractLesbianHistory from 'services/getExtractLesbianHistory';

const ListOfArticles = () => {
  const [lesbianHistory, setLesbianHistory] = useState([]);

  useEffect(function () {
    getExtractLesbianHistory().then((data) => setLesbianHistory(data));
  }, []);

  return (
    <>
      <Box>
        <Columns breakpoint="tablet">
          {lesbianHistory.length > 0 ? (
            lesbianHistory.map(
              (
                { canonicalurl, extract, image, pageid, pageimage, title },
                id,
              ) => {
                return (
                  <Columns.Column key={id} size={6}>
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
            <Progress max={100} color="primary" size="small" />
          )}
        </Columns>
      </Box>
    </>
  );
};

export default ListOfArticles;
