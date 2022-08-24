import * as React from 'react';
import type { HeadFC } from 'gatsby';
import GlobalStyle from '../styles/global';

import Home from '../components/Home';

function HomePage() {
  return (
    <div>
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default HomePage;

export const Head: HeadFC = () => <title>Portflix - Início</title>;
