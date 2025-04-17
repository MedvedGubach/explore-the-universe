import { gql } from "@apollo/client";

export const GET_APOD = gql`
query GetApod($date: String){
apod(date: $date){
date
title
explanation
url
media_type
}
}
`