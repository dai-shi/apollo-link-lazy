import { SchemaLink } from '@apollo/client/link/schema';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { addMocksToSchema, IMocks } from '@graphql-tools/mock';

const typeDefs = `
type Query {
  posts: [Post]!
}
type Post {
  id: ID!,
  text: String!,
}
type Mutation {
  addPost(text: String!): Post
}
`;

type Post = {
  id: number;
  text: string;
};

const posts: Post[] = [{
  id: 1001,
  text: 'This is the first post',
}, {
  id: 1002,
  text: 'This is the second',
}];

const mocks: IMocks = {
  Mutation: () => ({
    addPost: (_root: unknown, { text }: Post) => posts.push({
      id: Date.now(),
      text,
    }),
  }),
  Query: () => ({
    posts: () => posts,
  }),
};

const schema = makeExecutableSchema({ typeDefs });

const schemaWithMocks = addMocksToSchema({ schema, mocks });

export default new SchemaLink({ schema: schemaWithMocks });
