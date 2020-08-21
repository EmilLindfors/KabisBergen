import React from "react"
import { graphql } from "gatsby"
import { Title, Text } from "gatsby-theme-material-foundry"
import {
  Container,
  Box,
  makeStyles,
} from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"

const useStyles = makeStyles(theme => ({
  hero: {
    color: "white",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "50px",
      paddingBottom: "50px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "100px",
      paddingBottom: "100px",
    },
  },
}))

function InnovationPage(props) {
  const img = props.data.cover.childImageSharp.fluid
  const classes = useStyles()
  return (
    <Layout dark>
      <SEO
        postDescription="innovation"
        postTitle="Innovation at KABIS"
        slug="imapct-forum"
      />
      <BackgroundImage
        alt={`cover picture`}
        fluid={img}
        className={classes.hero}
      >
        <Box align="center" py={16}>
          <Container maxWidth="md">
            <Title variant="h1">KABIS Innovation</Title>
            <Title variant="h4">
            This page is under construction
            </Title>
          </Container>
        </Box>
      </BackgroundImage>
      
    </Layout>
  )
}

export default InnovationPage

export const pageQuery = graphql`
  query Innovations {
    cover: file(relativePath: { eq: "format_impact_forum.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(
          maxWidth: 2000
          duotone: { highlight: "#006381", shadow: "#004357" }
          traceSVG: { color: "#004357" }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
