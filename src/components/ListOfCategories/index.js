import React, { useEffect, useState } from 'react';

import Spinner from '@bit/nexxtway.react-rainbow.spinner';

import getWikiCategories from 'services/getWikiCategories';
import { FLEXCENTER } from '../../services/settings';

import { Link } from 'react-router-dom';

import { Button, Box, Columns, Notification } from 'react-bulma-components';

const ListofCategories = () => {
  const [lesbianCategory, setLesbianCategory] = useState([]);

  useEffect(function () {
    getWikiCategories().then((data) => setLesbianCategory(data));
  }, []);

  return (
    <>
      <Notification color="warning">
        Información que aparece en <strong>Wikipedia</strong>: "La siguiente
        lista contiene a las mujeres de las que es <strong>pública</strong> su
        orientación <strong>lesbiana</strong>."
      </Notification>
      <Columns breakpoint="tablet">
        {lesbianCategory.length > 0 ? (
          lesbianCategory.map((category) => {
            return (
              <Columns.Column size={6}>
                <Box key={category} style={FLEXCENTER}>
                  <Link to={`/lesbianas/${category}`}>
                    <Button color="dark">{category}</Button>
                  </Link>
                </Box>
              </Columns.Column>
            );
          })
        ) : (
          <Spinner />
        )}
      </Columns>
    </>
  );
};

export default ListofCategories;
