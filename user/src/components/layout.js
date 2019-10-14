import React from "react"
import { Helmet } from "react-helmet"
import {
  Header,
  HeaderLinks,
} from "gatsby-theme-material-foundry"
import { graphql, useStaticQuery, Link } from "gatsby"
import { makeStyles, Box, Container, Grid } from "@material-ui/core/"
import Subscribe from "./subscribe-dialog"

const useStyles = makeStyles(theme => ({
  footer: {
    "& a": {
      color: "#e2e2e2",
      "&:hover": {
        color: "white"
      }
    }
  },
}))

const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { eq: "kabislogo_white.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return data
}

const TemplateWrapper = ({ children }) => {
  const { site, file } = useSiteMetadata()
  const classes = useStyles()
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Helmet>
        <html lang="en" />
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={site.siteMetadata.title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Header
        absolute
        color="transparent"
        brand={
          <div
            style={{ display: "flex", alignItems: "center", width: "100px" }}
            ariaLabel="home button"
            role="button"
          >
            <img
              src={file.childImageSharp.fixed.src}
              alt={site.siteMetadata.title}
            />
            <span style={{ visibility: "hidden" }}>
              {site.siteMetadata.title}
            </span>
          </div>
        }
        rightLinks={
          <HeaderLinks
            links={[
              { link: "/projects", text: "Projects" },
              { link: "/students-corner", text: "Students Corner" },
              { link: "/annual-report", text: "Annual Report" },
              { link: "/about", text: "About" },
            ]}
          />
        }
      />
      <div style={{ minHeight: "100%" }}>{children}</div>
      <div style={{backgroundColor: "#111"}}>
      <Container maxWidth="lg">
        <Grid container>
     <Grid item xs={12} md={2} align="center">
       <Box py={8}>
       <Link to="/">
           <img
              src={file.childImageSharp.fixed.src}
              alt={site.siteMetadata.title}
            />
            </Link>
            </Box>
            </Grid>
            <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="space-between" alignContent="center" className={classes.footer} py={8} px={4} mt={2}>
            <Link to="/projects">Projects</Link>

            <Link to="/students-corner">Student's Corner</Link>
            <Link to="/annual-report">Annual Report</Link>
            <Link to="/about">About KABIS</Link>
           
          </Box>
          </Grid>
          <Grid item xs={12} md={4} align="center">
          <Box py={8}>
          <Subscribe/>
          </Box>
         </Grid>
        
        </Grid>
        </Container>
        </div>
    </div>
  )
}

export default TemplateWrapper
