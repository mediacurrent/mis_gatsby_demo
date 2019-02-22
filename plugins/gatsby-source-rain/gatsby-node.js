const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const homepageTemplate = path.resolve(`src/templates/NodeHomepageTemplate/index.js`);
    const pageTemplate = path.resolve(`src/templates/NodePageTemplate/index.js`);

    resolve(
      graphql(
        `
          {
            allNodeHomepage(
              filter: {status: {eq:true}}
            ) {
              edges {
                node {
                  status
                  nid:drupal_internal__nid
                  path { alias }
                }
              }
            }
            allNodePage(
              filter: {status: {eq:true}}
            ) {
              edges {
                 node {
                  status
                  nid:drupal_internal__nid
                  path { alias }
                }
              }
            }
          }
        `
      )
        .then((result) => {
          if (result.errors) reject(result.errors);
          if (!result.data) reject('No data found. Fix your GraphQL stuff');
          console.log('Creating Homepage Nodes');
          result.data.allNodeHomepage.edges.forEach(({ node }) => {
            const path = (node.path.alias == '/home') ? '/' : node.path.alias;
            createPage({
              path: path,
              component: homepageTemplate,
              context: {
                slug: node.nid
              }
            })
          });
          console.log('Creating Page Nodes');
          result.data.allNodePage.edges.forEach(({ node }) => {
            createPage({
              path: node.path.alias,
              component: pageTemplate,
              context: {
                slug: node.nid
              }
            })
          });
        })
    )
  })
}
