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

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const response = await graphql(`
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
    response.data.allContentfulProject.edges.forEach(edge => {
        createPage({
            path: `/work/${edge.node.slug}`,
            component: path.resolve("./src/templates/project-page.js"),
            context: {
                slug: edge.node.slug,
            },
        })
    })
}