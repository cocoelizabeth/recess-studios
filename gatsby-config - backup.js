module.exports = {
  siteMetadata: {
    title: `Recess Studios`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "IQoRcVyd1Zt9pgwjl4giMXprG3dK4GlwO6j_4ArCb8A",
      "spaceId": "iq9j8u3tm16b"
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
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};