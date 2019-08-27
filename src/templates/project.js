import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import {
  DividedSection,
  Badge,
  Title,
  Text,
} from "gatsby-theme-material-foundry"
import EventList from "../components/event-list"
import { Container, Card, Grid, Box } from "@material-ui/core"
import Divider from "@material-ui/core/Divider"

function GenerateTags({ tags }) {
  const tagArray = tags.split(",")
  return tagArray.map(tag => <Badge key={tag}>{tag}</Badge>)
}

function EventTemplate(props) {
  const {
    description,
    category,
    projecttitle,
    nameofprojectlead,
    involvedorganizations,
    tags,
    startdate,
    enddate,
  } = props.data.googleSheetProjectsRow
  return (
    <Layout>
      <DividedSection black height="70vh">
        <Container maxWidth="md">
          <Text variant="subheader">
            <Badge color="primary">{category}</Badge>
            {tags && <GenerateTags tags={tags} />}
          </Text>
          <Title variant="h2" gutterBottom>
            {projecttitle}
          </Title>
          <Text variant="h5">
            {startdate} - {enddate}
          </Text>
        </Container>
      </DividedSection>
      <Container maxWidth="md">
        <Box pt={4}>
          <Grid container>
            <Grid item md={8}>
              <Box pr={4}>
                <Divider />
                <Box pt={2}>
                  <Text variant="body1" fontSize="24px">
                    {description}
                  </Text>
                </Box>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Card align="center">
                <Box p={2}>
                  <Title align="center">Project Info</Title>

                  <EventList
                    category={category}
                    date={startdate}
                    person={nameofprojectlead}
                    organization={involvedorganizations}
                  />
                </Box>
              </Card>
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
    googleSheetProjectsRow(id: { eq: $itemId }) {
      description
      category
      projecttitle
      nameofprojectlead
      involvedorganizations
      tags
      startdate
      enddate
    }
  }
`
