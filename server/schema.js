import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    signIn(email: String!, password: String!): AuthPayload!
  }

  type AuthPayload {
    error: ErrorPayload
    token: String
  }

  type ErrorPayload {
    statusCode: Int!
    message: String
  }
`;
