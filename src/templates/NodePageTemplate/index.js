import React from 'react';
import { graphql } from 'gatsby';

// Layout
import Layout from '../../components/layouts/Layout';

// Fields
import Content from '../../components/fields/Content';

const NodePageTemplate = ({ data }) => {
  const { content } = data.nodePage.r;
  return (
    <Layout>
      <Content content={content} />
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
