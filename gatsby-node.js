const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      products: allContentfulProduct {
        edges {
          node {
            contentful_id
          }
        }
      }
    }
  `)

  data.products.edges.forEach(({ node }) => {
    createPage({
      path: `products/${node.contentful_id}`,
      component: path.resolve("./src/templates/ProductTemplate.js"),
      context: {
        contentful_id: node.contentful_id,
      },
    })
  })
}
