import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

// Layout
import Layout from '../../components/layouts/Layout';

// Fields
import Content from '../../components/fields/Content';
import Heading from '../../components/fields/Heading';

const NodePageTemplate = ({ data }) => {
  const { title, summary } = data.nodePage;
  const { content } = data.nodePage.r;
  return (
    <Layout>
      <Helmet>
        <title>{title} | Mediacurrent</title>
        <meta name="description" content={summary} />
      </Helmet>
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
