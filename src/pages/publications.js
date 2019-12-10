import React from "react"
import { graphql } from "gatsby"
import {
  Title,
  Text,
  Badge
} from "gatsby-theme-material-foundry"
import {
  Container,
  Box,
  Divider,
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

function Publications(props) {
  const img = props.data.cover.childImageSharp.fluid

  const classes = useStyles()
  return (
    <Layout dark>
      <SEO
        postDescription="The Impact Forum is an arena where the
        project’s industry partners are invited to openly share current
        challenges and issues related to operations (technical and biological)
        and business."
        postTitle="Project Pool"
        slug="imapct-forum"
      />
      <BackgroundImage
        alt={`cover picture`}
        fluid={img}
        className={classes.hero}
      >
        <Box align="center" py={16}>
          <Container maxWidth="md">
            <Title variant="h1">Publications</Title>
            <Title variant="h4">
               <em>Please note that the list is under development</em>
            </Title>
          </Container>
        </Box>
      </BackgroundImage>
      <Container maxWidth="sm">
        <Box my={4}>
   {props.data.publications &&
            props.data.publications.nodes.map(p => (
              <>
            
                <Box py={4}>
                    
                <Text black gutterBottom>
                <Badge color="primary">{p.year}</Badge>
                   {p.journal}
                  </Text>
                  <Text variant="h5" black gutterBottom>
                    {p.title}
                  </Text>
                  <Text paragraph>{p.authors}</Text>
                 
                </Box>
                <Divider />
              </>
            ))}
        </Box>
      </Container>
    </Layout>
  )
}

export default Publications

export const pageQuery = graphql`
  query Publications {
    cover: file(relativePath: { eq: "project.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    publications: allPublications {
        nodes {
          authors
          year
          title
          journal
          doi
          id
        }
      }
  }
`
