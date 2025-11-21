import { gql } from "@apollo/client";

export const GET_NAVBAR = gql`
  query {
      navbar {
        Logo {
          url
        }
        buttonlink
        buttontext
        items {
          badge
          heading
          id
          label
          link
          order
          submenus {
            Button
            featureheading
            features {
              name
              id
            }
            subtitle
            title
            id
          }
        }
        regions {
          link
          name
          order
          siteUrl
        }
        viewText
        regions_connection {
          nodes {
            link
            siteUrl
            order
            name
          }
        }
        regionTitle
        regionSelector
        documentId
      }
      }
    `;

export const GET_BLOG = gql`
    query  {
      blogs {
        title
        slug
        content
        description
        link
        featureImage {
          url
        }
        seo {
          keywords
          metaDescription
          metaRobots
          metaTitle
          metaViewport
          structuredData
          openGraph {
            ogDescription
            ogImage {
              url
            }
            ogType
            ogTitle
            ogUrl
          }
        }
      }
    }`;


export const GET_HOME_SECTION_1 = gql`
query  {
  homes {
    title
    heading
    description
    btn1_link
    btn1_text
    btn2_link
    btn2_text
    stats {
      label
      number
      id
    }
  }
}`;

export const GET_GLOBAL_REACH = gql`
query {
  homeSerivices {
    badge
    title
    description
    home_service_items {
      order
      name
      Image {
        url
      }
      button1link
      button1text
      button2link
      button2text
      description
      featureheading
      linktext
      performanceheading
      performance {
        name
        stats
      }
      serviceFeatures {
        name
      }
    }
  }
}

`
export const GET_WORLD_IMPACT = gql` 
query {
  worldwideImpact {
    badge
    description
    title
    projectsStat {
      count
      countryCount
      countryName
      title
    }
    successStat {
      title
      value
    }
  }
}

`
export const GET_INSIGHTS = gql`
query {
  insight {
    title
    description
    button
    buttonLink
    articles {
      title
      slug
      image {
        url
      }
      featuredText
      featured
      description
      date
      content
      category
      buttontext
      buttonlink
      blog_category {
        category
      }
    }
  }
}
  
`
export const GET_TESTIMONIALS = gql`
 query {
  testimonialsSection {
    badge
    title
    description
    testimonials {
      feedback
      name
      company
      position
    }
  }
}
  
`

export const GET_FOOTER = gql`

query {
  footer {
    logo {
      url
    }
    description
    socialLinks {
      icon
      url
    }
    footerMenu {
      title
      links {
        label
        url
      }
    }
    bottomLinks {
      label
      url
    }
    copyrightText
  }
}

`

