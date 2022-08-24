import * as React from 'react';
import type { HeadFC } from 'gatsby';

function IndexPage() {
  return <div>Index</div>;
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
