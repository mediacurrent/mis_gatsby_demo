import { graphql } from 'gatsby';

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
export const heroMediaFragment = graphql`
  fragment heroMediaFragment on paragraph__hero_media {
    heading:field_title
    subhead:field_subhead
    r:relationships {
      cards:field_card {
        ...cardFragment
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
