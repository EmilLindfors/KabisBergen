import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Title, Text, Badge } from "gatsby-theme-material-foundry"
import { Grid, Divider, Container, Box, makeStyles } from "@material-ui/core"
import EventList, { GenerateTags } from "../components/event-list"
import moment from "moment"
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
  }
}));

function EventsPage(props) {
  const projects = props.data.allProjects.nodes
  const img = props.data.cover.childImageSharp.fluid
  const classes = useStyles()

  return (
    <Layout>
      <SEO
        postDescription="Read about the projects that are connected to KABIS"
        postTitle="Projects"
        slug="projects"
      />
      <BackgroundImage
        alt={`cover picture`}
        fluid={img}
        className={classes.hero}
      >
          <Box align="center" py={16}>
        <Title variant="h2" align="center">
          Kabis Projects
        </Title>
        </Box>
      </BackgroundImage>
      <Container maxWidth="md">
        {projects.map(e => {
          const status = moment(e.end).isBefore(Date.now()) ? "finished" : moment(e.start).isAfter(Date.now()) ? "planned" : "in progress"
          const statusColor = status === "finished" ? "success" : status === "in progress" ? "warning" : "error"
          return(
          <React.Fragment>
            <Box mb={4} mt={4}>
              <Grid container key={e.id} spacing={3}>
                <Grid item xs={12} sm={4}>
                  {e.coverUrl ? (
                    <img
                      src={`${e.coverUrl}&sz=w500`}
                      alt="cover"
                      style={{
                        width: "100%",
                        maxHeight: "170px",
                        objectFit: "cover",
                        objectPosition: "100% 0",
                      }}
                    />
                  ) : (
                    <Img fluid={props.data.project.childImageSharp.fluid} />
                  )}
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Text variant="subheader">
                  <Badge color={statusColor}>{status}</Badge>
                    {e.tags && <GenerateTags tags={e.tags} color="primary" />}
                  </Text>
                  <div>
                    <Title
                      component={Link}
                      to={`/projects/${e.slug}`}
                      variant="h4"
                      color="inherit"
                    >
                      {e.title}
                    </Title>
                  </div>
                  <EventList
                    horizontal
                    category={e.category}
                    date={`${e.start} - ${e.end}`}
                    person={e.author}
                    organization={e.organizations}
                    noLink
                   
                  />
                </Grid>
              </Grid>
            </Box>
            <Divider />
          </React.Fragment>
        )})}
      </Container>
    </Layout>
  )
}

export const ItemPageQuery = graphql`
  query Projects {
    allProjects(sort: { order: DESC, fields: end }) {
      nodes {
        id
        coverUrl
        description
        category
        title
        author
        slug
        organizations
        tags
        start(formatString: "MMMM YYYY")
        end(formatString: "MMMM YYYY")
      }
    }
    cover: file(relativePath: { eq: "cover.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000,
          duotone: { highlight: "#006381", shadow: "#004357" }
          traceSVG: { color: "#004357" }) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project: file(relativePath: { eq: "project.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default EventsPage
