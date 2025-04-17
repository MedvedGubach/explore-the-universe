import { gql } from "apollo-server-express";
import { typeDefs as ApodTypeDefs } from './apodSchema';
import { typeDefs as NivlTypeDefs } from './nasaLibrarySchema';

export const rootTypeDefs = gql`
  type Query
`;

export const typeDefs = [rootTypeDefs, ApodTypeDefs, NivlTypeDefs];
