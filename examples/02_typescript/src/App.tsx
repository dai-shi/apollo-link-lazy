import React from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { lazy } from 'apollo-link-lazy';

import PostList from './PostList';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: lazy(() => import('./link')),
});

const App = () => (
  <ApolloProvider client={client}>
    <PostList />
  </ApolloProvider>
);

export default App;
