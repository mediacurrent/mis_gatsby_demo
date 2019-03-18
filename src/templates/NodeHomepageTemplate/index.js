import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layouts/Layout';

import Content from '../../components/fields/Content';

import Heading from '../../components/fields/Heading';

const NodeHomepageTemplate = ({data}) => {
  const { title } = data.nodeHomepage;
  const { content } = data.nodeHomepage.r;
  // Add homepage video logic.
  content.home_video_hero = true;
  return(
    <Layout>
      <Heading level={1}>{title}</Heading>
      <Content content={content} />
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
