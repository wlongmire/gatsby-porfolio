module.exports = {
  siteMetadata: {
    title: `alongmiredesigner.io`,
    author: `@gatsbyjs`,
    name: `Warren C. Longmire`,
    role: `Full Stack Developer`,
    description: `Experienced Computer Science Specialist with a demonstrated history of working in the information technology and services industry. Skilled in Javascript, Python (Programming Language, AWS technologies and more. Strong engineering professional graduated from the University of Pennsylvania.`,
    email: `warrenlongmire@gmail.com`,
    phone: `(215) 327-0235`,
    site: `alongmireDesigner.io`,
    linkedIn: `https://www.linkedin.com/in/warrenlongmire/`,
    github: `https://github.com/wlongmire`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ],
}
