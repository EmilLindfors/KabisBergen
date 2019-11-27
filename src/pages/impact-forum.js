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

function IndexPage(props) {
  const img = props.data.cover.childImageSharp.fluid
  const classes = useStyles()
  return (
    <Layout dark>
      <SEO
        postDescription="The Impact Forum is an arena where the
        project’s industry partners are invited to openly share current
        challenges and issues related to operations (technical and biological)
        and business."
        postTitle="Kabis Impact Forum"
        slug="imapct-forum"
      />
      <BackgroundImage
        alt={`cover picture`}
        fluid={img}
        className={classes.hero}
      >
        <Box align="center" py={16}>
          <Container maxWidth="md">
            <Title variant="h1">Impact Forum</Title>
            <Title variant="h4">
            An arena where the
        project’s industry partners are invited to openly share current
        challenges and issues
            </Title>
          </Container>
        </Box>
      </BackgroundImage>
      <Container maxWidth="md">
        <Title variant="h2" black>
          About the Impact Forum
        </Title>

        <Text paragraph>
          The KABIS’ “Impact Forum” is held once a year in conjunction with the
          project’s annual meeting. The Impact Forum is an arena where the
          project’s industry partners are invited to openly share current
          challenges and issues related to operations (technical and biological)
          and business. Present at these meetings are academic personnel from
          NORCE, The University of Bergen and the Western Norway University
          College of Applied Sciences. All input are written down and later
          processed and sorted to be presented as possible bachelor-, master- or
          PhD-projects.
        </Text>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query ImpactForum {
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
