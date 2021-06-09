import React from "react"
import { graphql } from "gatsby"
import {
  DividedSection,
  Title,
  Text,
  Button,
} from "gatsby-theme-material-foundry"
import { Container, Box, makeStyles, Grid, Divider } from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ProjectCard } from "../components/custom-cards"
//import SubscribeDialog from "../components/subscribe-dialog"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

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
  const classes = useStyles()
  const img = props.data.cover.childImageSharp.fluid

  return (
    <Layout>
      <SEO />
      <BackgroundImage
        alt={`cover picture`}
        fluid={img}
        className={classes.hero}
      >

        <Box align="center" pt={16} pb={8}>
          <Container maxWidth="md" align="center">
            <Box pt={8} style={{ maxWidth: "800px" }}>
              <div style={{ position: "relative", overflow: "hidden", paddingTop: "56.25%" }}>
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "0",
                    boxShadow:
                      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
                  }}
                  width="800"
                  title="KABIS Video"
                  src="https://www.youtube.com/embed/YFSp0rlcW2k"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </Box>
            <Title variant="h3" align="center">
              Aquaculture reserach and <br />
              education in Bergen, Norway
            </Title>
            <Text variant="h5" align="center">
              Capacity-lift for Sustainable and Innovative Aquaculture
              Production
            </Text>
            <Box m={2} py={4}>
              <Button color="secondary" simple to="/projects" size="lg">
                Go to Projects
              </Button>
              <Button color="secondary" to="/about" size="lg">
                About Kabis
              </Button>
            </Box>
          </Container>
        </Box>
      </BackgroundImage>
      <Box my={4}>
        <DividedSection>
          {props.data.partners &&
            props.data.partners.nodes.map((company, i) => (
              <a key={i} href={company.website}>
                <img src={company.logoUrl} width="100px" alt={company.name} />
              </a>
            ))}
        </DividedSection>
      </Box>
      <Box my={12}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={8}>
              <Box p={6} mt={4}>
                <Text variant="h4" align="left">
                  Connecting research and industry
      </Text>
                <Text variant="h6">
                  The KABIS projects brings together a network of world leading actors and institutions in the salmon farming industry.
        </Text>
                <Button color="primary" to="/about" size="md">
                  Participants
              </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box p={2}>
                <Img fluid={props.data.kabisnetwork.childImageSharp.fluid} alt="kabis network" />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Box p={2}>
                <Img fluid={props.data.impactforum.childImageSharp.fluid} alt="Impact Forum" />
              </Box>
            </Grid>

            <Grid item xs={12} sm={8}>
              <Box p={6} mt={4}>
                <Text variant="h4" align="left">
                  Collaborative research and innovation
      </Text>
                <Text variant="h6">
                  Through the Impact Forum, we have created an arena to materialize industry needs into projects and innovations.
        </Text>
                <Button color="primary" to="/impact-forum" size="md">
                  Impact Forum
              </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box my={12}>
        <Container maxWidth="lg">
          <Text variant="h4">
            Industry wide results
          </Text>
          <Divider />
          <Grid container>
            {props.data.latestProjects.nodes.map(p => (
              <ProjectCard
                key={`project-${p.id}`}
                title={p.title}
                date={`${p.start}-${p.end}`}
                link={`/projects/${p.slug}`}
                image={p.coverUrl}
                tags={p.tags}
                author={p.author}
                backupImage={
                  props.data.backupProjectImg.childImageSharp.fixed.src
                }
              />
            ))}
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export default IndexPage

/*  <Container maxWidth="md">
        <Box pt={8}>
          <Text align="left" variant="h4">
            "Kabis is a good project that will benefit the region, we do a lot
            of important stuff."
          </Text>
        </Box>
        <Box justifyContent="flex-end" mr={4}>
          <AvatarCard
            horizontal
            img={props.data.quote.avatarUrl}
            name={props.data.quote.fullname}
            role={props.data.quote.kabisrole}
            logo={props.data.quote.company.logoUrl}
            orgRole={props.data.quote.orgrole}
          />
        </Box>
      </Container>*/

export const pageQuery = graphql`
  query IndexPage {
    cover: file(relativePath: { eq: "cover.jpg" }) {
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
    kickoff: file(relativePath: { eq: "kabis-kickoff.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    partners: allCompanies(filter: { type: { eq: "Partner" } }) {
      nodes {
        name
        website
        logoUrl
      }
    }
    backupProjectImg: file(relativePath: { eq: "project.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    latestProjects: allProjects(sort: { order: ASC, fields: end }, limit: 3) {
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
    studentsCorner: file(relativePath: { eq: "sc_cover.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kabisnetwork: file(relativePath: { eq: "kabisnetwork.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    impactforum: file(relativePath: { eq: "impactforum.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    quote: people(fullname: { eq: "Sigurd Handeland" }) {
      fullname
      kabisrole
      avatarUrl
      orgrole
      company {
        logoUrl
        name
      }
    }
  }
`
