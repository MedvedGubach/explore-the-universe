import { gql } from "apollo-server-express";

export const typeDefs = gql`
type Nivl{
title: String
description: String
nasa_id: String
preview_url: String
}

type AssetInfo{
nasa_id: String
files: [String]
}

   extend type Query{
  nivl(query: String!):[Nivl]
  nivlAsset(nasa_id: String!): AssetInfo
}

`