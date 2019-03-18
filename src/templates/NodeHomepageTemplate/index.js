import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layouts/Layout';

import Content from '../../components/fields/Content';

const NodeHomepageTemplate = ({data}) => {
  const { content } = data.nodeHomepage.r;
  // Add homepage video logic.
  content.home_video_hero = true;
  return(
    <Layout>
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
