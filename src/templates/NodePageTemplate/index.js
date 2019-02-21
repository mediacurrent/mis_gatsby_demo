import React from 'react';
import { graphql } from 'gatsby';

// Layout
import Layout from '../../components/layouts/Layout';

// Paragraphs
import Card from '../../components/paragraphs/Card';
import CardList from '../../components/paragraphs/CardList';
import Faq from '../../components/paragraphs/Faq';
import Hero from '../../components/paragraphs/Hero';
import Map from '../../components/paragraphs/Map';
import Quote from '../../components/paragraphs/Quote';

// Fields
import Heading from '../../components/fields/Heading';

const NodePageTemplate = ({ data }) => {
  const { title } = data.nodePage;
  const { content } = data.nodePage.r;
  return (
    <Layout>
      <Heading level={1}>{title}</Heading>
      {content.map((section, i) => {
        const datakey = `paragraph--section--${section['__typename']}--${i}`;

        switch (section['__typename']) {
          case "paragraph__card":
            return <Card {...section} key={datakey} />
          case "paragraph__card_list":
            section.items = section.r.items;
            return <CardList {...section} key={datakey} />;
          case "paragraph__faq":
            return <Faq {...section} key={datakey} />;
          case "paragraph__hero_media":
            return <Hero {...section} key={datakey} />;
          case "paragraph__map":
            return <Map {...section} key={datakey} />;
          case "paragraph__quote":
            return <Quote {...section} key={datakey} />;
          default:
            console.log(section['__typename']);
            return '';
        }
      })}
    </Layout>
  )
}

export default NodePageTemplate;

export const query = graphql`
  query pageTemplate($slug: Int) {
    nodePage(drupal_internal__nid: {eq:$slug}) {
      ...nodePageFragment
    }
  }
`;
