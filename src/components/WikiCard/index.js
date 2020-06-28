import React from 'react';
import LogoNodos from '../../images/logo_nodos.png';
import { FLEXCENTER } from '../../services/settings';

import {
  Media,
  Image,
  Level,
  Content,
  Button,
  Box,
} from 'react-bulma-components';

const WikiCard = ({ canonicalurl, extract, image, pageimage, title }) => {
  return (
    <>
      <Box>
        <Media style={FLEXCENTER}>
          <Media.Item renderAs="figure" position="left">
            <Image
              alt={pageimage}
              src={typeof image === 'undefined' ? LogoNodos : image}
              style={{ maxWidth: '200px' }}
              rounded={typeof image === 'undefined' ? true : false}
            />
          </Media.Item>
        </Media>
        <Media>
          <Media.Item>
            <Content>
              <p>
                <strong>{title}</strong>
                <br />
                {extract}
              </p>
            </Content>
            <Level breakpoint="mobile">
              <Level.Side align="left">
                <Button
                  renderAs="a"
                  fullwidth={true}
                  color="dark"
                  target="_blank"
                  rel="noopener noreferrer"
                  content="enlace"
                  href={canonicalurl}
                >
                  Más información en Wikipedia
                </Button>
              </Level.Side>
            </Level>
          </Media.Item>
        </Media>
      </Box>
    </>
  );
};

export default WikiCard;
