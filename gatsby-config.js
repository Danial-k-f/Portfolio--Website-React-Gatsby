/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  assetPrefix: `https://cdn.example.com`,
  siteMetadata: {
    title: `my first gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        //  name:`dan`,
        path: `${__dirname}/src/images/`,
      },
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
  
  'gatsby-plugin-postcss'
],




};