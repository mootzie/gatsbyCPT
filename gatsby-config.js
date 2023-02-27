/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `http://gatsbypractice.local/`,
    description: 'This is where I write my thoughts',
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": " http://gatsbypractice.local/graphql"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp"]
};