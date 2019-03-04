import { graphql } from 'gatsby';

export const nodeHomepageFragment = graphql`
  fragment nodeHomepageFragment on node__homepage {
    title
    nid:drupal_internal__nid
    path {
      alias
    }
    r:relationships {
      content:field_content {
        __typename
        ... on paragraph__breaker {
          ...breakerFragment
        }
        ... on paragraph__card {
          ...cardFragment
        }
        ... on paragraph__card_list {
          ...cardListFragment
        }
        ... on paragraph__hero_media {
          ...heroMediaFragment
        }

      }
      thumbnail:field_thumbnail {
        r:relationships {
          image:field_image {
            file:localFile {
              cis:childImageSharp {
                fixed(height:220) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const nodePageFragment = graphql`
  fragment nodePageFragment on node__page {
    title
    nid:drupal_internal__nid
    path {
      alias
    }
    r:relationships {
      content:field_content {
        __typename
        ... on paragraph__breaker {
          ...breakerFragment
        }
        ... on paragraph__card {
          ...cardFragment
        }
        ... on paragraph__card_list {
          ...cardListFragment
        }
        ... on paragraph__faq {
          ...faqFragment
        }
        ... on paragraph__gallery_carousel {
          ...galleryCarouselFragment
        }
        ... on paragraph__hero_media {
          ...heroMediaFragment
        }
        ... on paragraph__map {
          ...mapFragment
        }
        ... on paragraph__quote {
          ...quoteFragment
        }
      }
      thumbnail:field_thumbnail {
        r:relationships {
          image:field_image {
            file:localFile {
              cis:childImageSharp {
                fluid(maxHeight:200) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
