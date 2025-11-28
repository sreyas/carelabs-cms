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
          icon
           slug
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
    title1
    title2 
    title3
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


export const GET_HOME_SECTION_12 = gql`
query ($locale: I18NLocaleCode!) {
  homes(locale: $locale) {
    title1
    title2
    title3
    heading
    description
    btn1_link
    btn1_text
    btn2_link
    btn2_text
    stats {
      id
      label
      number
    }
  }
}
`;


export const GET_GLOBAL_REACH = gql`
query {
  homeSerivices {
    badge
    title
    description
    home_service_items {
      order
      name
      icon
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
      icon
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

export const GET_SERVICES = gql`
query {
  services {
    badge
    badgeicon
    mainheading1
    mainheading2
    maindesc
    mainbutton1
    mainbuttonlink1
    mainbutton2
    mainbuttonlink2
    mainbutton3
    mainbuttonlink3
    mainimage {
      url
    }
    service_stats {
      label
      number
    }
    service_features {
      title
      description
    }
    Why_Matters {
      title
      subtitle
      icon
      ans1
      ans2
      ans3
      ans4
    }
    WhatsIncludedtitle
    WhatsIncludedsubtitle
    whats_include_features {
      icon
      label
      description
      stat
    }
    methodsTitle
    methodsSubtitle
    methodology {
      Order
      icon
      OrderTitleText
      OrderSubtitleText
    }
    sectorBenefitsTitle
    sectorBenefitsSubtitle
    sectorBenefits {
      icon
      label
      list1
      list2
      list3
    }
    resultsTitle
    resultsSubtitle
    resultsStat {
      percentage
      description
    }
    resultName {
      icon
      label
      description
    }
    readyTitle
    readySubtitle
    readyButton1
    readyButton1Link
    readyButton2
    readyButton2Link
    relatedTitle
    relatedSubtitle
    relatedServices {
      icon
      label
      description
    }
    faqTitle
    faqSubtitle
    questions {
      questionName
      questionAns
    }
    technicalTitle
    technicalItems {
      icon
      label
      format
    }
  }
}

`

export const GET_SINGLE_SERVICE_BY_SLUG = gql`
  query ($slug: String!) {
    services(filters: { slug: { eq: $slug } }) {
      slug
      badge
      badgeicon
      mainheading1
      mainheading2
      maindesc
      mainbutton1
      mainbuttonlink1
      mainbutton2
      mainbuttonlink2
      mainbutton3
      mainbuttonlink3
      mainimage { url }
      service_stats {
        label
        number
      }
        service_features {
      title
      description
      icon
    }
    Why_Matters {
      title
      subtitle
      icon
      ans1
      ans2
      ans3
      ans4
    }
    WhatsIncludedtitle
    WhatsIncludedsubtitle
    whats_include_features {
      icon
      label
      description
      stat
    }
    methodsTitle
    methodsSubtitle
    methodology {
      Order
      icon
      OrderTitleText
      OrderSubtitleText
      image {
        url
      }
    }
    sectorBenefitsTitle
    sectorBenefitsSubtitle
    sectorBenefits {
      icon
      label
      list1
      list2
      list3
    }
    resultsTitle
    resultsSubtitle
    resultsStat {
      percentage
      description
    }
    resultName {
      icon
      label
      description
    }
    readyTitle
    readySubtitle
    readyButton1
    readyButton1Link
    readyButton2
    readyButton2Link
    relatedTitle
    relatedSubtitle
    relatedServices {
      icon
      label
      description
    }
    faqTitle
    faqSubtitle
    questions {
      questionName
      questionAns
    }
    technicalTitle
    technicalItems {
      icon
      label
      format
     }
    }
  }
`;

// export const GET_INSIGHTS_BY_SLUG = gql`
// query ($slug: String!) {
//   insightblogs (filters: { slug: { eq: $slug } }) {
//     badge
//     badgeicon
//     mainheading
//     description
//     authoricon
//     author
//     publishedicon
//     publishedOn
//     timeicon
//     time
//     slug
//     category {
//       title
//     }
//     introtitle
//     introcontent
//     articleSection {
//       title
//       articleItems {
//         order
//         slug
//         title
//       }
//     }
//     Weeklytitle
//     Weeklydesc
//     emailplaceholder
//     subscribebutton
//     subscribebuttonlink
//     sections {
//       ... on ComponentInsightsWhyTraditionalMaintenance {
//         title
//         slug
//         introduction
//         WhyTraditionalItems {
//           title
//           description
//         }
//       }
//       ... on ComponentInsightsWhatAiPoweredPredictive {
//         title
//         slug
//         content
//         imagetext
//         image {
//           url
//         }
//       }
//       ... on ComponentInsightsKeyBuildingBlocks {
//         title
//         slug
//         KeyBuildingBlocksItems {
//           order
//           title
//           icon
//           content
//         }
//         image {
//           url
//         }
//         imagetext
//       }
//       ... on ComponentInsightsRealWorld {
//         title
//         slug
//         RealWorldItems {
//           icon
//           title
//           content
//           result
//         }
//       }
//       ... on ComponentInsightsHowtoGetStarted {
//         title
//         content
//         image {
//           url
//         }
//         imagetext
//         slug
//       }
//       ... on ComponentInsightsChallenges {
//         title
//         slug
//         introduction
//         ChallengesItems {
//           title
//           description
//         }
//         conclusion
//       }
//       ... on ComponentInsightsTheRoadAhead {
//         title
//         slug
//         content
//         conclusion
//       }
//     }
//     exploretitle
//     exploresubtitle
//     button1text
//     button1icon
//     button1link
//     button2text
//     button2link
//     RelatedArticlesText
//     RelatedArticleItems {
//       icon
//       category
//       title
//       readtext
//       readicon
//       link
//     }
//   }
// }
  
// `

export const GET_INSIGHTS_BY_SLUG = gql`
  query ($slug: String!) {
    insightblogs(filters: { slug: { eq: $slug } }) {
      badge
      badgeicon
      mainheading
      description
      authoricon
      author
      publishedicon
      publishedOn
      timeicon
      time
      slug
      category {
        title
      }
      introtitle
      introcontent
      articleSection {
        title
        articleItems {
          order
          slug
          title
        }
      }
      Weeklytitle
      Weeklydesc
      emailplaceholder
      subscribebutton
      subscribebuttonlink
      sections {
        ... on ComponentInsightsWhyTraditionalMaintenance {
          title
          slug
          introduction
          WhyTraditionalItems {
            title
            description
          }
        }
        ... on ComponentInsightsWhatAiPoweredPredictive {
          title
          slug
          content
          imagetext
          image {
            url
          }
        }
        ... on ComponentInsightsKeyBuildingBlocks {
          title
          slug
          KeyBuildingBlocksItems {
            order
            title
            icon
            content
          }
          image {
            url
          }
          imagetext
        }
        ... on ComponentInsightsRealWorld {
          title
          slug
          RealWorldItems {
            icon
            title
            content
            result
          }
        }
        ... on ComponentInsightsHowtoGetStarted {
          title
          content
          image {
            url
          }
          imagetext
          slug
        }
        ... on ComponentInsightsChallenges {
          title
          slug
          introduction
          ChallengesItems {
            title
            description
          }
          conclusion
        }
        ... on ComponentInsightsTheRoadAhead {
          title
          slug
          content
          conclusion
        }
      }
      exploretitle
      exploresubtitle
      button1text
      button1icon
      button1link
      button2text
      button2link
      RelatedArticlesText
      RelatedArticleItems {
        icon
        category
        title
        readtext
        readicon
        link
      }
    }
  }
`;










