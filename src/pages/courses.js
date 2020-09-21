import React from "react"
import { graphql } from "gatsby"
import { Title, Section, Button, Text } from "gatsby-theme-material-foundry"
import { Container, Box, Divider, Grid } from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"

/*const useStyles = makeStyles(theme => ({
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
}))*/

function CoursesPage(props) {
  const projectImage = props.data.project.childImageSharp.fluid
  return (
    <Layout dark>
      <SEO
        postDescription="KABIS is involved in multiple courses at the university of Bergen and the Western Norwway University of Applied Sciences."
        postTitle="KABIS Courses"
        slug="courses"
      />
      <Section black>
        <Box align="center" py={16}>
          <Container maxWidth="md">
            <Title variant="h1">Courses</Title>
            <Title variant="h4">Courses related to KABIS activities</Title>
          </Container>
        </Box>
      </Section>
      <Container maxWidth="md">
        <Box my={8}>
          <div>
            <iframe
              class="media-vimeo-player"
              width="800"
              height="450"
              title="Derfor er du ettertraktet hvis du studerer havbruk hos oss"
              src="//player.vimeo.com/video/320149180"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <em>producer: UiB | source: //player.vimeo.com/video/320149180</em>
          <Title variant="h4" black>
            Civ Eng. Aquaculture & Seafood
          </Title>
          <Text paragraph>
            <bold>
              This is an integrated 5 year master's programme that is taught in
              Norwegian at the University of Bergen. This degree puts
              aquaculture biology into a context with broodstock, fish health,
              aquaculture technology, production process optimalization,
              quality, VAP and microbiology. The candidates receive education in
              economy, law, sales and marketing as well as different cultures
              and communication methods that are relevant for the aquaculture
              and seafood industry.
            </bold>
          </Text>
          <Button color="primary" to="https://www.uib.no/studier/MAMN-HAVSJ">
            Read more
          </Button>
        </Box>
        <Box my={8}>
          <Title variant="h4" secondary>
            Single Courses
          </Title>
          <Divider />
          <Box mt={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Box height="200px" mt={2}>
                  <BackgroundImage fluid={projectImage}>
                    {" "}
                    <Box
                      height="150px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="white"
                    >
                      <Title variant="h3" color="inherit">
                        <a
                          style={{ color: "inherit", textDecoration: "none" }}
                          href="https://www.uib.no/emne/BIF100"
                        >
                          BIF 100{" "}
                        </a>
                      </Title>
                    </Box>
                  </BackgroundImage>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Title variant="h4" black>
                  <a
                    style={{ color: "inherit" }}
                    href="https://www.uib.no/emne/BIF100"
                  >
                    Introduction to Fish Health and Aquaculture
                  </a>
                </Title>
                <Text black variant="h6">
                  <a href={props.data.uib.website}>
                    <img
                      width="70px"
                      alt={props.data.uib.name}
                      src={props.data.uib.logoUrl}
                    />
                  </a>{" "}
                  | 10 credits
                </Text>
              </Grid>
            </Grid>
          </Box>
          <Divider />
          <Box mt={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Box height="200px" mt={2}>
                  <BackgroundImage fluid={projectImage}>
                    {" "}
                    <Box
                      height="150px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="white"
                    >
                      <Title variant="h3" color="inherit">
                        <a
                          style={{ color: "inherit", textDecoration: "none" }}
                          href="https://www.uib.no/emne/BIF301"
                        >
                          BIF 101{" "}
                        </a>
                      </Title>
                    </Box>
                  </BackgroundImage>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Title variant="h4" black>
                  <a
                    style={{ color: "inherit" }}
                    href="https://www.uib.no/emne/BIF200"
                  >
                    Organism Biology for fish Health and Aquaculture
                  </a>
                </Title>
                <Text black variant="h6">
                  <a href={props.data.uib.website}>
                    <img
                      width="70px"
                      alt={props.data.uib.name}
                      src={props.data.uib.logoUrl}
                    />
                  </a>{" "}
                  | 10 credits
                </Text>
              </Grid>
            </Grid>
          </Box>
          <Divider />
          <Box mt={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Box height="200px" mt={2}>
                  <BackgroundImage fluid={projectImage}>
                    {" "}
                    <Box
                      height="150px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="white"
                    >
                      <Title variant="h3" color="inherit">
                        <a
                          style={{ color: "inherit", textDecoration: "none" }}
                          href="https://www.uib.no/emne/BIF200"
                        >
                          BIF 200
                        </a>
                      </Title>
                    </Box>
                  </BackgroundImage>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Title variant="h4" black>
                  <a
                    style={{ color: "inherit" }}
                    href="https://www.uib.no/emne/BIF200"
                  >
                    Aquaculture Technology
                  </a>
                </Title>
                <Text black variant="h6">
                  <a href={props.data.uib.website}>
                    <img
                      width="70px"
                      alt={props.data.uib.name}
                      src={props.data.uib.logoUrl}
                    />
                  </a>{" "}
                  | 10 credits
                </Text>
              </Grid>
            </Grid>
          </Box>
          <Divider />
          <Box mt={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Box height="200px" mt={2}>
                  <BackgroundImage fluid={projectImage}>
                    {" "}
                    <Box
                      height="150px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="white"
                    >
                      <Title variant="h3" color="inherit">
                        <a
                          style={{ color: "inherit", textDecoration: "none" }}
                          href="https://www.hvl.no/studier/studieprogram/emne/27/inn518"
                        >
                          INN 518
                        </a>
                      </Title>
                    </Box>
                  </BackgroundImage>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Title variant="h4" black>
                  <a
                    style={{ color: "inherit" }}
                    href="https://www.hvl.no/studier/studieprogram/emne/27/inn518"
                  >
                    Commercialization and Financing of Technology and
                    Innovations
                  </a>
                </Title>
                <Text black variant="h6">
                  <a href={props.data.hvl.website}>
                    <img
                      width="70px"
                      alt={props.data.hvl.name}
                      src={props.data.hvl.logoUrl}
                    />
                  </a>{" "}
                  | 10 credits
                </Text>
              </Grid>
            </Grid>
          </Box>
          <Divider />
          <Box mt={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Box height="200px" mt={2}>
                  <BackgroundImage fluid={projectImage}>
                    {" "}
                    <Box
                      height="150px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="white"
                    >
                      <Title variant="h3" color="inherit">
                        <a
                          style={{ color: "inherit", textDecoration: "none" }}
                          href="https://www.hvl.no/en/studies-at-hvl/study-programmes/course/inn520"
                        >
                          INN 520
                        </a>
                      </Title>
                    </Box>
                  </BackgroundImage>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Title variant="h4" black>
                  <a
                    style={{ color: "inherit" }}
                    href="https://www.hvl.no/en/studies-at-hvl/study-programmes/course/inn520"
                  >
                    Entrepreneurship in practice, Start-ups in a regional
                    context
                  </a>
                </Title>
                <Text black variant="h6">
                  <a href={props.data.hvl.website}>
                    <img
                      width="70px"
                      alt={props.data.hvl.name}
                      src={props.data.hvl.logoUrl}
                    />
                  </a>{" "}
                  | 10 credits
                </Text>
              </Grid>
            </Grid>
          </Box>
          <Divider />
          <Box mt={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Box height="200px" mt={2}>
                  <BackgroundImage fluid={projectImage}>
                    {" "}
                    <Box
                      height="150px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="white"
                    >
                      <Title variant="h3" color="inherit">
                        <a
                          style={{ color: "inherit", textDecoration: "none" }}
                          href="https://www.hvl.no/studier/studieprogram/emne/27/inn524"
                        >
                          INN 524
                        </a>
                      </Title>
                    </Box>
                  </BackgroundImage>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Title variant="h4" black>
                  <a
                    style={{ color: "inherit" }}
                    href="https://www.hvl.no/studier/studieprogram/emne/27/inn524"
                  >
                    innovation through cross-disciplinary student teams
                  </a>
                </Title>
                <Text black variant="h6">
                  <a href={props.data.hvl.website}>
                    <img
                      width="70px"
                      alt={props.data.hvl.name}
                      src={props.data.hvl.logoUrl}
                    />
                  </a>{" "}
                  | 10 credits
                </Text>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default CoursesPage

export const ItemPageQuery = graphql`
  query CoursesQuery {
    project: file(relativePath: { eq: "project.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hvl: companies(
      name: { eq: "Western Norway University of Applied Sciences" }
    ) {
      logoUrl
      website
      name
    }

    uib: companies(name: { eq: "University of Bergen" }) {
      logoUrl
      website
      name
    }
  }
`
