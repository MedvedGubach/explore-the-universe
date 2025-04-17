import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Apod {
    date: String
    explanation: String
    hdurl: String
    title: String
    url: String
    media_type: String
  }

  extend type Query {
  apod(date: String): Apod
  }
`;

