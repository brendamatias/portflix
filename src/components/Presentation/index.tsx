import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { Container } from './styles';
import logo from '../../images/logo.svg';

function HomePage() {
  return (
    <Container>
      <div className="header">
        <img src={logo} alt="Portflix" />
      </div>

      <div className="content">
        <div>
          <h1>Quem você quer contratar?</h1>

          <div className="profiles">
            <a href="home">
              <div className="image" />
              <span>Brenda</span>
            </a>

            <a href="home">
              <div className="addProfileIcon" />
              <span>Adicionar perfil</span>
            </a>
          </div>

          <div className="profile-button">
            <a href="home">Gerenciar perfis</a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HomePage;

export const Head: HeadFC = () => <title>Home Page</title>;
