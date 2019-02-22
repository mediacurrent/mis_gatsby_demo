import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layouts/Layout';

import Card from '../../components/paragraphs/Card';
import CardList from '../../components/paragraphs/CardList';
import Hero from '../../components/paragraphs/Hero';

import Heading from '../../components/fields/Heading';

// @todo: Add paragraph and title components.

const NodeHomepageTemplate = ({data}) => {
  const { title } = data.nodeHomepage;
  const { content } = data.nodeHomepage.r;
  return(
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
          case "paragraph__hero_media":
            return <Hero {...section} key={datakey} />;
          default:
            console.log(section['__typename']);
            return '';
        }
      })}
    </Layout>
  );
}

export default NodeHomepageTemplate;

export const query = graphql`
  query homepageTemplate($slug: Int) {
    nodeHomepage(drupal_internal__nid: {eq:$slug}) {
      ...nodeHomepageFragment
    }
  }
`
