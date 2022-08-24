import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { MdInfoOutline, MdThumbUp } from 'react-icons/md';
import { Container, Content, Header } from './styles';
import profile from '../../images/profile.jpeg';
import logo from '../../images/logo.svg';
import search from '../../images/search.svg';
import notification from '../../images/notification.svg';

function HomePage() {
  return (
    <Container>
      <Header>
        <div className="links">
          <img src={logo} alt="Portflix" />

          <ul>
            <li>
              <a href="teste">Início</a>
            </li>
            <li>
              <a href="teste">Filmes</a>
            </li>
            <li>
              <a href="teste">Skills</a>
            </li>
            <li>
              <a href="teste">Projetos</a>
            </li>
          </ul>
        </div>

        <div className="icons">
          <img src={search} alt="Pesquisar..." />
          <img src={notification} alt="Notificações" />

          <div>
            <img
              src={profile}
              className="profileImg"
              alt="Brenda Matias Perfil"
            />
            <span className="caret" />
          </div>
        </div>
      </Header>

      <Content>
        <div>
          <h1>Brenda Matias Web Developer</h1>
          <p>
            Graduated in Computer Engineering, working in the area of ​​software
            engineering with emphasis on systems development.
          </p>

          <div className="buttons">
            <button type="button" className="contractButton">
              <MdThumbUp />
              Gostei!
            </button>
            <button type="button" className="moreInfoButton">
              <MdInfoOutline />
              Mais informações
            </button>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default HomePage;

export const Head: HeadFC = () => <title>Home Page</title>;
