import * as React from 'react';
import type { HeadFC } from 'gatsby';

import Presentation from '../components/Presentation';

function AboutPage() {
  return <Presentation />;
}

export default AboutPage;

export const Head: HeadFC = () => <title>Portflix - Sobre</title>;
