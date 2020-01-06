import React from 'react';

import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
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
