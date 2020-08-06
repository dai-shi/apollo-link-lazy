import { SchemaLink } from '@apollo/client/link/schema';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
type Query {
  posts: [Post]
}
type Post {
  id: ID!,
  text: String!,
}
type Mutation {
  addPost(text: String!): Post
}
`;

const posts = [{
  id: 1001,
  text: 'This is the first post',
}, {
  id: 1002,
  text: 'This is the second',
}];

const resolvers = {
  Mutation: () => ({
    addPost: (_root: unknown, { text }: { text: string }) => posts.push({
      text,
      id: Date.now(),
    }),
  }),
  Query: () => ({
    posts: () => posts,
  }),
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default new SchemaLink({ schema });
