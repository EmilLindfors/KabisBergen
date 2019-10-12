import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import {
  DividedSection,
  Badge,
  Title,
  Text,
} from "gatsby-theme-material-foundry"
import SEO from "../components/seo"
import EventList from "../components/event-list"
import { Container, Card, Grid, Box, Hidden } from "@material-ui/core"
import Divider from "@material-ui/core/Divider"

function GenerateTags({ tags }) {
  return tags.map(tag => <Badge key={tag}>{tag}</Badge>)
}

function EventTemplate(props) {
  const {
    description,
    category,
    title,
    author,
    organizations,
    projectPerson,
    tags,
    coverUrl,
    start,
    fileUrl,
    slug,
    end,
  } = props.data.projects
  return (
    <Layout>
         <SEO
        postDescription={description}
        postTitle={title}
        slug={`projects/${slug}`}
        postImage={`${coverUrl}&sz=w1000`}
        article
      />
      <DividedSection black height="50vh">
        <Container maxWidth="md">
          <Text variant="subheader">
            <Badge color="primary">{category}</Badge>
            {tags && <GenerateTags tags={tags} />}
          </Text>
          <Title variant="h2" gutterBottom>
            {title}
          </Title>
          <Text variant="h5">
            {start} - {end}
          </Text>
        </Container>
      </DividedSection>
      <Container maxWidth="md">
        <Box pt={4} pb={8} style={{marginTop: "-100px"}}>
          {coverUrl && (
            <img
              src={`${coverUrl}&sz=w800`}
              alt="cover"
              style={{
                width: "100%",
                maxHeight: "500px",
                objectFit: "cover",
                objectPosition: "100% 0",
                boxShadow:
                "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
              }}
            />
          )}
          <Grid container>
            <Grid item md={8}>
              <Box pr={4}>
             
                <Box pt={2}>
                <Title variant="h3" color="primary">
                   Project Summary
                  </Title>
                <Divider />
                <Box pt={2}>
                  <Text variant="body1" fontSize="24px">
                    {description}
                  </Text>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Hidden smDown>
              <Box mt={14}>
                <Card align="center">
                  <Box p={2}>
                    <Title align="center">Project Info</Title>

                    <EventList
                      category={category}
                      date={end}
                      person={author}
                      organization={organizations}
                      projectPerson={projectPerson}
                      link={fileUrl}
                    />
                  </Box>
                </Card>
                </Box>
              </Hidden>
              <Hidden mdUp>
                <Box p={2} align="center">
                  <Title align="center">Project Info</Title>

                  <EventList
                    horizontal
                    category={category}
                    date={start}
                    person={author}
                    organization={organizations}
                    projectPerson={projectPerson}
                    link={fileUrl}
                  />
                </Box>
              </Hidden>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  )
}

export default EventTemplate

export const ItemPageQuery = graphql`
  query ItemDetails($itemId: String!) {
    projects(id: { eq: $itemId }) {
      description
      category
      title
      coverUrl
      fileUrl
      slug
      projectPerson {
        avatarUrl
        fullname
      }
      author
      organizations
      tags
      start(formatString: "MMMM YYYY")
      end(formatString: "MMMM YYYY")
    }
  }
`
