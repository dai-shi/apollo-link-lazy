import React from 'react';
import ReactDOM from 'react-dom';

import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { lazy } from 'apollo-link-lazy';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: lazy(() => import('./link')),
});

const QUERY_POSTS = gql`
query queryPosts {
  posts {
    id
    text
  }
}
`;

const PostList = () => {
  const { loading, error, data } = useQuery(QUERY_POSTS);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {`${error}`}</div>;
  if (!data) return <div>No Data</div>;
  return (
    <ul>
      {data.posts.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

const App = () => (
  <ApolloProvider client={client}>
    <PostList />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
