require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const customQueries = {
  xs: '(max-width: 320px)',
  sm: '(max-width: 768px)',
  md: '(max-width: 992px)',
  l: '(max-width: 1024px)',
  portrait: '(orientation: portrait)',
};

module.exports = {
  siteMetadata: {
    title: "The Light Tree",
    siteUrl: 'https://www.thelighttreeyoga.co.uk/' ,
    basePath: '/',
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2048,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/img/favicon.png",
      },
    },
    {
      resolve: `gatsby-plugin-breakpoints`,
      options: {
          queries: customQueries,
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
      },
    },
    "gatsby-plugin-netlify",
  ],
};
