import React from "react"
import { graphql } from "gatsby"
import {
  Title,
  Text,
  Button,
  Badge,
  Section,
} from "gatsby-theme-material-foundry"
import {
  Container,
  Box,
  makeStyles,
  Avatar,
  Card,
  CardContent,
  CardActions,
  Grid,
  Divider,
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
  const projects = props.data.projects.nodes
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
        postImage={img.src}
      />
      <BackgroundImage
        alt={`cover picture`}
        fluid={img}
        className={classes.hero}
      >
        <Box align="center" py={16}>
          <Container maxWidth="md">
            <Title variant="h1">Project Pool</Title>
            <Title variant="h4">
              Potential bachelor, master or PhD projects.
            </Title>
          </Container>
        </Box>
      </BackgroundImage>
      <Container maxWidth="sm">
       
        <Box my={4}>
          {projects &&
            projects.map(p => (
              <Box py={4}>
                <Badge color="primary">{p.category}</Badge>
                {p.tags.map((tag, i) => (
                  <Badge color="primary" simple key={`${p.id}-tag-${i}`}>
                    {tag}
                  </Badge>
                ))}
                <Text variant="h5" black gutterBottom>
                  {p.title}
                </Text>
                <Text paragraph>{p.problem}</Text>

                <Box display="flex">
                  <Avatar src={p.supervisor.avatarUrl} />
                  <Box p={1}>
                  <Text secondary><a style={{textDecoration: "none", color: "inherit"}} href={`mailto:${p.supervisor.email}`}>{p.supervisor.fullname}</a></Text>
                 </Box>
                </Box>
              </Box>
            ))}
          <Divider />
        </Box>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query ProjectPool {
    cover: file(relativePath: { eq: "project.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projects: allStudentpool {
      nodes {
        title
        supervisor {
          avatarUrl
          fullname
          email
        }
        problem
        category
        tags
        id
      }
    }
  }
`
