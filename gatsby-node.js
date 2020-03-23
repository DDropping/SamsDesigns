const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      products: allContentfulProduct {
        edges {
          node {
            id: contentful_id
          }
        }
      }
    }
  `)

  data.products.edges.forEach(({ node }) => {
    createPage({
      path: `products/${node.id}`,
      component: path.resolve("./src/templates/ProductTemplate.js"),
      context: {
        slug: node.id,
      },
    })
  })
}
