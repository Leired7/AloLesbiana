import React from 'react';
import { Navbar } from 'react-bulma-components/';
import Logo from '../../images/logo_horizontal.png';
import Octocat from '../../images/Octocat.jpg';

const Header = () => {
  const [isActive, setisActive] = React.useState(false);
  return (
    <header>
      <Navbar color="dark" active={isActive} fixed={'bottom'}>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="/">
            <img
              src={Logo}
              alt="Logo Aló lesbiana!"
              width="100px"
              height="100px"
            />
          </Navbar.Item>
          <Navbar.Burger
            active={`${isActive}`}
            onClick={() => setisActive(!isActive)}
          />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Container>
              <Navbar.Item href="/">Objetivo</Navbar.Item>
              <Navbar.Item href="/historia">Historia</Navbar.Item>
              <Navbar.Item href="/lesbianas">Lesbianas</Navbar.Item>
              {/* <Navbar.Item href="#">Películas de temática</Navbar.Item> */}
            </Navbar.Container>
            <Navbar.Item href="https://github.com/Leired7/alolesbiana">
              Repositorio del proyecto
              <img
                src={Octocat}
                alt="Logo del repositorio de GitHub dónde está alojado el código"
                width={'33px'}
                height={'33px'}
                rounded={`true`}
              />
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </header>
  );
};
export default Header;
