require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Recess Studios`,
    siteUrl: `https://www.recess.studio`
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
        "spaceId": process.env.CONTENTFUL_SPACE_ID,
      }
    }, "gatsby-plugin-sass",
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "G-EK73FV95V0"
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./data/",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    `gatsby-plugin-netlify`,
    `gatsby-plugin-commercelayer`

    // "@contentful/rich-text-types"
  ]
};