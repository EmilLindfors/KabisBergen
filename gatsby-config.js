module.exports = {
  siteMetadata: {
    title: `KABIS Project`,
    description: `Sustainable and Innovative Aquaculture Production`,
    author: `Kabis <info@kabis.no>`,
    siteUrl: "https://kabis.no",
    defaultImage: "images/cover.jpg",
    social: {
      twitter: "@kabisbergen",
      fbAppID: "@kabisbergen"
    },
   
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
        name: `KABIS`,
        short_name: `KABIS`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/kabis_icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-151531888-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://kabis.no',
        sitemap: 'https://kabis.no/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
     `gatsby-plugin-offline`,
  ],
}
