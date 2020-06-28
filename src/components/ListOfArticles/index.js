import React, { useEffect, useState } from 'react';

import WikiCard from '../WikiCard/index';

import Spinner from '@bit/nexxtway.react-rainbow.spinner';
import { Columns, Box } from 'react-bulma-components';

import getExtractLesbianHistory from '../../services/getExtractLesbianHistory';

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
                  <>
                    <Columns.Column size={6}>
                      <WikiCard
                        key={id}
                        canonicalurl={canonicalurl}
                        extract={extract}
                        image={image}
                        id={pageid}
                        pageimage={pageimage}
                        title={title}
                      />
                    </Columns.Column>
                  </>
                );
              },
            )
          ) : (
            <Spinner />
          )}
        </Columns>
      </Box>
    </>
  );
};

export default ListOfArticles;
