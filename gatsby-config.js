module.exports = {
  siteMetadata: {
    title: "DownShift",
    description: "",
    author: "Jordan Walker",
    name: "DownShift",
    phone: "1-888-331-4517",
    email: "shop@downshift.com",
    address: "P.O. Box 446",
    youtube: "https://www.youtube.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com",
    facebook: "https://www.facebook.com",
    bio:
      "Downshift is an automotive engineering company founded in Texas by Daniel Smith in 2013. We create the highest quality products for the automotive aftermarket tuning industry. Our products and services are professionally installed, thoroughly tested and backed by a 20-year free replacement warranty. We are a one-stop shop with over 50 years of combined knowledge with the best technicians and engineers around. Whether you want to stop fast, ride in style or run under 10 seconds on the track, no one beats our products and service.",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
        background_color: `#A4180E`,
        theme_color: `#A4180E`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
