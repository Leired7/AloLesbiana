import React from 'react';

import {
  Button,
  Container,
  Content,
  Heading,
  Notification,
  Section,
} from 'react-bulma-components';

import { PRIDE_COLORS } from 'services/settings';

const Purpose = () => {
  return (
    <>
      <Section style={PRIDE_COLORS}>
        <Container fluid>
          <Notification>
            <Heading size={3} renderAs="p" style={{ color: '#1bacb4' }}>
              Aló lesbiana!
            </Heading>

            <Content>
              <Heading size={5} renderAs="p">
                ESTAMOS POR TODOS LADOS, SIEMPRE LO ESTUVIMOS
              </Heading>
              <h1 style={{ fontSize: '18px' }}>
                Proyecto de visibilización de las lesbianas con artículo en
                Wikipedia
              </h1>
              <h2>Objetivo</h2>
              <p>
                Con esta página web quiero agrupar algunos artículos que existen
                en la Wikipedia sobre <strong>lesbianismo</strong> y{' '}
                <strong>lesbianas</strong> visibles públicamente.
              </p>
              <div style={{ height: '40px' }}></div>

              <p>
                También quiero que sirva para agradecer a les wikipedistas que
                editan la Wikipedia (en especial al grupo de trabajo Wikiesfera)
                por el gran trabajo que realizan para crear y compartir
                conocimiento.
              </p>
              <p>
                <strong>
                  Por el momento{' '}
                  <span role="img" aria-label="emoji guiño">
                    😉&nbsp;
                  </span>
                </strong>
                aquí podréis encontrar una pequeña introducción y el enlace a la
                información de varios artículos que están alojados en
                <strong>Wikipedia.</strong>
              </p>
              <p>
                En el <strong>Portal LGTB</strong> están visibles y agrupados
                muchos más artículos de interés.
              </p>
              <Button
                color="dark"
                renderAs="a"
                target="_blank"
                rel="noopener noreferrer"
                content="enlace"
                href="https://es.wikipedia.org/wiki/Portal:LGBT"
              >
                Portal LGTBI (W)
              </Button>
            </Content>
          </Notification>
        </Container>
      </Section>
    </>
  );
};

export default Purpose;
