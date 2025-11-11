import { gql } from "@apollo/client";

export const GET_NAVBAR = gql`
  query {
    navbar {
      Logo { url }
      items { label link order }
    }
  }
`;

export const GET_BLOG = gql`
  query  {
  blogs {
    title
    content
    featureImage {
      url
    }
  }
}
`;