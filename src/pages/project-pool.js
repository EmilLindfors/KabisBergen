import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import {
  Title,
  Text,
  Button,
  Badge,
} from "gatsby-theme-material-foundry"
import {
  Container,
  Box,
  makeStyles,
  Avatar,
  Grid,
  Divider,
  Chip
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
  chip: {
    color: "white",
    background: theme.palette.primary.light,
    "&:focus, &:hover": {
      background: theme.palette.primary.dark,
      color: theme.palette.secondary.light
    },
    margin: theme.spacing(0.5),
  },
}))


function IndexPage(props) {
  const img = props.data.cover.childImageSharp.fluid
  const projects = props.data.projects.nodes
  var [tagFilter, setTags] = useState([])
  const classes = useStyles()
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    var tags = []
    projects.map(p => p.tags.map(tag => !tags.includes(tag) && tags.push(tag)))
    setTags([...tags])
      
  }, [projects])

  /*const projectList = projects
    .filter(filter)
    .map(project => (
      <div>{JSON.stringify(project)}</div>
    ));*/


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
            <Title variant="h1">Project Pool</Title>
            <Title variant="h4">
              Potential Bachelor, Master, Civ. Eng. or PhD projects.
            </Title>
            <Chip
              className={classes.chip}
              label="ALL"
              color="currentColor"
              onClick={() => setFilter("ALL")}/>
            {tagFilter.length !== 0 && tagFilter.map(tag => 
            <Chip key={tag}
              className={classes.chip}
              label={tag}
              color="currentColor"
              onClick={() => setFilter(tag)}/>)}
          </Container>
        </Box>
      </BackgroundImage>
      <Container maxWidth="sm">
       
        <Box my={4}>
     <Text color="primary">{filter === "ALL" ? "All Projects": `Projects tagged with ${filter}`} </Text>
          {projects &&
            projects.filter(p => p.tags.find(tag => filter ==="ALL" ? true : tag === filter)).map((p, j) => (
              <>
                <Box py={4} key={j}>
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
                  <Grid container>
                    <Grid item xs={6}>
                      <Box display="flex">
                        <Avatar src={p.supervisor.avatarUrl} />
                        <Box p={1}>
                          <Text primary>
                            <a
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                              href={`mailto:${p.supervisor.email}`}
                            >
                              {p.supervisor.fullname}
                            </a>
                          </Text>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6} align="right">
                      <Button
                        size="sm"
                        color="secondary"
                        to={`mailto:${p.supervisor.email}?subject=KABIS Student Interested in project pool subject "${p.title}"&body=Problem statement: ${p.title} from problem: ${p.problem} `}
                      >
                        Contact supervisor
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Divider />
              </>
            ))}
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
