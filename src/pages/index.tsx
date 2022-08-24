import * as React from 'react';
import type { HeadFC } from 'gatsby';
import GlobalStyle from '../styles/global';

import Presentation from '../components/Presentation';

function IndexPage() {
  return (
    <main>
      <GlobalStyle />
      <Presentation />
    </main>
  );
}

export default IndexPage;

export const Head: HeadFC = () => <title>Portflix</title>;
