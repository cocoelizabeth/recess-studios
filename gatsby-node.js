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

"mailto:reservacionesaqsm@posadas.com?subject=Room%20Reservation%20for%20Coco%20%26%20Adam%E2%80%99s%20Wedding%20-%20Group%20Code%20G1RC3D&amp;body=Dear%20Reservations%20Team%2C%0A%0AI%20would%20like%20to%20book%20a%20room%20for%20Coco%20and%20Adam%27s%20wedding%20in%20San%20Miguel%20de%20Allende%20(Group%20Code%20G1RC3D).%20Please%20find%20my%20details%20below%20for%20the%20reservation%3A%0A%0A-%20Name%3A%0A-%20Email%3A%0A-%20Arrival%20Date%3A%0A-%20Departure%20Date%3A%0A-%20Room%20Type%3A%20%0A-%20Number%20of%20Adults%3A%0A-%20Number%20of%20Children%3A%0A-%20Names%20of%20Additional%20Guests%20Staying%20in%20Room%3A%0A-%20Telephone%3A%0A-%20Address%3A%20%0A-%20City%3A%20%0A-%20State%3A%0A-%20Postal%20Code%3A%0A-%20Country%3A%0A-%20Comments%3A%20%0A%0APlease%20confirm%20the%20availability%20of%20the%20rooms%20and%20any%20further%20steps%20needed%20to%20finalize%20my%20booking.%0A%0AThank%20you%20very%20much!%0A%0ABest%20regards%2C%0A"
