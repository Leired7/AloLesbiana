import React, { useEffect, useState } from 'react';

import WikiCard from '../WikiCard/index';

import getWikiMembers from '../../services/getWikiMembers';
import getAllLesbianExtractImage from '../../services/getAllLesbianExtractImage';

import {
  Heading,
  Columns,
  Box,
  Notification,
  Progress,
} from 'react-bulma-components';

import { Link } from 'react-router-dom';
import { FLEXCENTER } from 'services/settings';

const ListOfLesbians = (props) => {
  const [allLesbian, setallLesbian] = useState([]);

  useEffect(
    function () {
      getWikiMembers(props.match.params.category).then((data) => {
        const nameOfWomans = data;
        getAllLesbianExtractImage(nameOfWomans).then((data) => {
          setallLesbian(data);
        });
      });
    },
    [props.match.params.category],
  );

  return (
    <>
      <Notification color="warning">
        "La siguiente lista contiene a las mujeres de las que es&nbsp;
        <strong>pública</strong> su orientación <strong>lesbiana</strong>."{' '}
        <strong>Wikipedia</strong>
      </Notification>
      <Link to="/lesbianas" style={{ margin: '15px' }}>
        Volver a Lesbianas
      </Link>
      <Heading style={FLEXCENTER}>{props.match.params.category}</Heading>
      <Heading subtitle size={6} style={FLEXCENTER}>
        {`${allLesbian.length} artículos en Wikipedia`}
      </Heading>
      <Box>
        <Columns breakpoint="tablet">
          {allLesbian.length > 0 ? (
            allLesbian.map(
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
            <Progress max={100} color="primary" size="small" />
          )}
        </Columns>
      </Box>
      <Link to="/lesbianas" style={{ margin: '15px 15px' }}>
        Volver a Lesbianas
      </Link>
    </>
  );
};

export default ListOfLesbians;
