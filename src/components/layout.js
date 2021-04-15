import React from "react"
import { Header, HeaderLinks } from "gatsby-theme-material-foundry"
import { graphql, useStaticQuery, Link } from "gatsby"
import { makeStyles, Box, Container, Grid } from "@material-ui/core/"
//import Subscribe from "./subscribe-dialog"
import School from "@material-ui/icons/School"
import Books from "@material-ui/icons/LibraryBooks"
import Dashboard from "@material-ui/icons/Dashboard"
import Account from "@material-ui/icons/SupervisorAccount"
//import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  footer: {
    "& a": {
      color: "#e2e2e2",
      "&:hover": {
        color: "white",
      },
    },
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
              src
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
      <Header
        absolute
        color="transparent"
        brand={
          <>
            <img
              src={file.childImageSharp.fixed.src}
              alt={site.siteMetadata.title}
            />
            <span style={{ visibility: "hidden" }}>
              {site.siteMetadata.title}
            </span>
          </>
        }
        rightLinks={
          <HeaderLinks
            links={[
              { link: "/projects", text: "Projects" },
              {
                dropdown: {
                  title: "Student",
                  icon: School,
                  links: [
                    {
                      link: "/students-corner",
                      text: "Students Corner",
                    },
                    {
                      link: "/courses",
                      text: "Courses",
                    },
                    { link: "/project-pool", text: "Project Pool" },
                  ],
                },
              },
              {
                dropdown: {
                  title: "Research",
                  icon: Books,
                  links: [
                    {
                      link: "/publications",
                      text: "Publications",
                    },
                  ],
                },
              },
              {
                dropdown: {
                  title: "Innovation",
                  icon: Dashboard,
                  links: [
                    {
                      link: "/innovation",
                      text: "Innovation",
                    },
                  ],
                },
              },
              {
                dropdown: {
                  title: "About",
                  icon: Account,
                  links: [
                    { link: "/about", text: "About" },
                    { link: "/annual-report", text: "Annual Report" },
                    { link: "/impact-forum", text: "Impact Forum" },
                  ],
                },
              },
            ]}
          />
        }
      />
      <div style={{ minHeight: "100%" }}>{children}</div>
      <div style={{ backgroundColor: "#111" }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={4} align="center">
              <Box py={8}>
                <Link to="/">
                  <img
                    src={file.childImageSharp.fixed.src}
                    alt={site.siteMetadata.title}
                  />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignContent="center"
                className={classes.footer}
                py={8}
                px={4}
                mt={2}
              >
                <Link to="/projects">Projects</Link>

                <Link to="/students-corner">Student's Corner</Link>
                <Link to="/annual-report">Annual Report</Link>
                <Link to="/about">About KABIS</Link>
                <a href="mailto:info@kabis.no">info@kabis.no</a>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default TemplateWrapper
