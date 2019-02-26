import React from 'react';
import { graphql } from 'gatsby';

// Layout
import Layout from '../../components/layouts/Layout';

// Fields
import Content from '../../components/fields/Content';
import Heading from '../../components/fields/Heading';

const NodePageTemplate = ({ data }) => {
  const { title } = data.nodePage;
  const { content } = data.nodePage.r;
  return (
    <Layout>
      <Heading level={1}>{title}</Heading>
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
