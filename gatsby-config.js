module.exports = {
  siteMetadata: {
    title: `KABIS Project`,
    description: `Sustainable and Innovative Aquaculture Production`,
    author: `Emil Lindfors <emil@lindforsfoundry.com>`,
    siteUrl: "https://kabis.no",
    defaultImage: "/images/cover.jpg",
  },
  plugins: [
    `gatsby-theme-material-foundry`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
