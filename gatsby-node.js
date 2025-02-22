// exports.createPages = async ({ actions: { createPage }, graphql }) => {
//  const results = await graphql(`
//     {
//         allProjectsJson {
//             edges {
//                 node {
//                     project_name
//                 }
//             }
//         }
//     }
//  `)

// function string_to_slug(str) {
//     str = str.replace(/^\s+|\s+$/g, ''); // trim
//     str = str.toLowerCase();

//     // remove accents, swap ñ for n, etc
//     var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
//     var to = "aaaaeeeeiiiioooouuuunc------";
//     for (var i = 0, l = from.length; i < l; i++) {
//         str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
//     }

//     str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
//         .replace(/\s+/g, '-') // collapse whitespace and replace by -
//         .replace(/-+/g, '-'); // collapse dashes

//     return str;
// }

// results.data.allProjectsJson.edges.forEach(edge => {
//     const project = edge.node;
//     const projectName = project.project_name;
//     const slug = string_to_slug(projectName);
//     const order = project.order

//     createPage({
//         path: `/work/${slug}/`,
//         component: require.resolve("./src/templates/project-page.js"),
//         context: {
//             slug: slug,
//             projectName: projectName,
//             order: order,
//         }

//     })
// })
// }

const { count } = require("console")
const path = require("path")
// import { getSalesChannelToken } from '@commercelayer/js-auth';

// const token = await getSalesChannelToken({
//     clientId: 'ca9Lqe-VhQpED4It7n2OO7b9MSFHTFlPyKMJCQ23XZ0',
//     endpoint: 'https://recess-studios.commercelayer.io',
//     scope: 'market:10564'
//   })

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const projectResponse = await graphql(`
      query {
        allContentfulProject {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
    projectResponse.data.allContentfulProject.edges.forEach(edge => {
        createPage({
            path: `/work/${edge.node.slug}`,
            component: path.resolve("./src/templates/project-page.js"),
            context: {
                slug: edge.node.slug,
            },
        })
    })


    const countryResponse = await graphql(`
      query {
        allContentfulEcommCountry {
            edges {
              node {
                node_locale
                code
                catalog {
                  name
                  node_locale
                  categories {
                    name
                    products {
                      name
                      contentful_id
                    }
                    contentful_id
                  }
                }
              }
            }
        }
      }
    `)


    countryResponse.data.allContentfulEcommCountry.edges.forEach(({ node }) => {
      createPage({
        path:`/shop/`,
        component: path.resolve(`src/templates/catalog-page.js`),
        context: {
          // Data passed to the context is available in page queries as GraphQL variables
          slug:`/shop/`,
          language: node.node_locale,
          shipping: node.code,
          pageTitle: "SHOP"
        }
      })
      // logic to create '/us/en-us/'
      // createPage({
      //   path:
      //   `/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/`,
      //   component: path.resolve(`src/templates/catalog-page.js`),
      //   context: {
      //     // Data passed to the context is available in page queries as GraphQL variables
      //     slug:
      //     `/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/`,
      //       language: node.node_locale,
      //       shipping: node.code,
      //       pageTitle: "SHOP"
      //   }
      // })
      node.catalog.categories.map( c => {
        const categorySlug = c.name
          .trim()
          .toLowerCase()
          .replace(' & ', ' ')
          .replace(/\s/gm, '-')
          // Category page
          createPage({
            // path:`/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/${categorySlug}`,
            path: `/shop/${categorySlug}`,
            component: path.resolve(`./src/templates/category-page.js`),
            context: {
              // Data passed to context is available in page queries as GraphQL variables
              slug: `/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/${categorySlug}`,
              language: node.node_locale,
              shipping: node.code,
              categoryId: c.contentful_id,
              categorySlug,
              pageTitle: c.name.trim()
            }
          })
          c.products.map(p => {
            const productSlug = p.name.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s/gm, '-').replace(/--/, "-")
            // Product
            createPage({
              // path:`/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/${categorySlug}/${productSlug}`,
              path: `/shop/${productSlug}`,
              component: path.resolve(`./src/templates/product-page.js`),
                context: {
                  slug: 
                    `/shop/${productSlug}`,
                        language: node.node_locale,
                        shipping: node.code,
                        categoryId: c.contentful_id,
                        categorySlug,
                        categoryName: c.name.trim(),
                        productId: p.contentful_id,
                        pageTitle: p.name.trim()
                }
            })
          })
      })
    })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        querystring: require.resolve("querystring-es3"),
      },
    },
  });
};
