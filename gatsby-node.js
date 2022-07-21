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
      // Catalog page
      createPage({
        path:
        `/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/`,
        component: path.resolve(`src/templates/catalog-page.js`),
        context: {
          // Data passed to the context is available in page queries as GraphQL variables
          slug:
          `/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/`,
            language: node.node_locale,
            shipping: node.code,
            pageTitle: "MERCH"
        }
      })
      node.catalog.categories.map( c => {
        const categorySlug = c.name
          .trim()
          .toLowerCase()
          .replace(' & ', ' ')
          .replace(/\s/gm, '-')
          // Category page
          createPage({
            path:
            `/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/${categorySlug}`,
            component: path.resolve(`./src/templates/category-page.js`),
            context: {
              // Data passed to context is available in page queries as GraphQL variables
              slug: 
                `/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/${categorySlug}`,
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
              path:
                `/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/${categorySlug}/${productSlug}`,
                component: path.resolve(`./src/templates/product-page.js`),
                context: {
                  slug: 
                    `/${node.code.toLowerCase()}/${node.node_locale.toLowerCase()}/${categorySlug}/${productSlug}`,
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

