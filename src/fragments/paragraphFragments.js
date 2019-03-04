import { graphql } from 'gatsby';

export const breakerFragment = graphql`
  fragment breakerFragment on paragraph__breaker {
    r:relationships {
      cards:field_card {
        classes:field_card_layout
        heading:field_title
        subhead:field_subhead
        eyebrow:field_short_title
        text:field_summary
        link:field_link {
          uri
          title
        }
        r:relationships {
          media:field_media {
            r:relationships {
              image:field_image {
                localFile {
                  cis:childImageSharp {
                    f:fluid(maxHeight: 300) {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const cardFragment = graphql`
  fragment cardFragment on paragraph__card {
    classes:field_card_layout
    heading:field_title
    subhead:field_subhead
    eyebrow:field_short_title
    text:field_summary
    link:field_link {
      uri
      title
    }
    r:relationships {
      media:field_media {
        r:relationships {
          image:field_image {
            localFile {
              cis:childImageSharp {
                fixed(height:220) {
                  src
                }
              }
              extension
              publicURL
            }
          }
        }
      }
    }
  }
`

export const cardListFragment = graphql`
  fragment cardListFragment on paragraph__card_list {
    title:field_title
    r:relationships {
      items:field_card {
        ...cardFragment
      }
    }
  }
`
export const faqFragment = graphql`
  fragment faqFragment on paragraph__faq {
    title:field_title
    r:relationships {
      items:field_faq_items {
        question:field_question
        answer:field_answer {value}
      }
    }
  }
`;

export const galleryCarouselFragment = graphql`
  fragment galleryCarouselFragment on paragraph__gallery_carousel {
    title:field_title
    subhead:field_subhead
    pid:drupal_internal__id
    r:relationships {
      items:field_card {
        title:field_title
        subhead:field_subhead
        eyebrow:field_short_title
        link:field_link {
          uri
          title
        }
        r:relationships {
          media:field_media {
            r:relationships {
              image:field_image {
                file:localFile {
                  cis:childImageSharp {
                    fixed(height:300) {
                      src
                    }
                  }
                }
              }
            }
          }
          thumb:field_thumb {
            file:localFile {
              cis:childImageSharp {
                fixed(height:100) {
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

export const heroMediaFragment = graphql`
  fragment heroMediaFragment on paragraph__hero_media {
    r:relationships {
      cards:field_card {
        classes:field_card_layout
        heading:field_title
        subhead:field_subhead
        eyebrow:field_short_title
        text:field_summary
        link:field_link {
          uri
          title
        }
        r:relationships {
          media:field_media {
            r:relationships {
              image:field_image {
                localFile {
                  cis:childImageSharp {
                    f:fluid(maxHeight: 500) {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const mapFragment = graphql`
  fragment mapFragment on paragraph__map {
    map:field_map {
      lat
      lng
    }
    body:field_body {value}
    heading:field_title
    eyebrow:field_short_title
    link:field_link {
      uri
      title
    }
  }
`

export const quoteFragment = graphql`
  fragment quoteFragment on paragraph__quote {
    quote:field_quote
    name:field_author
    job:field_job_title
  }
`
