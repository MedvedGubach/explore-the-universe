import { gql } from "@apollo/client";

export const GET_NIVL = gql`
query GetNivl($query: String){
    nivl(query: $query){
    description
    nasa_id
    preview_url
    title
    }
}
`;

export const GET_NIVL_ASSET = gql`
query GetNivlAsset($nasa_id: String!){
   nivlAsset(nasa_id: $nasa_id){
    nasa_id
    files
   }
}
`