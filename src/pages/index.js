import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import {
  DividedSection,
  Title,
  Text,
  Button,
} from "gatsby-theme-material-foundry"
import { Container, Box, makeStyles } from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { AvatarCard } from "../components/custom-cards"
import SubscribeDialog from "../components/subscribe-dialog"
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

function IndexPage(props) {
  const classes = useStyles()
  const img = props.data.cover.childImageSharp.fluid

  return (
    <Layout>
      <SEO postImage={img} />
      <BackgroundImage
        alt={`cover picture`}
        fluid={img}
        className={classes.hero}
      >
          <Box align="center" py={16}>
        <Container maxWidth="md" align="center">
          <Title variant="h3" align="center">
            Aquaculture reserach and <br/>education in Bergen, Norway
          </Title>
          <Text variant="h5" align="center">
            Capacity-lift for Sustainable and Innovative Aquaculture Production
          </Text>
          <Box m={2}>
            <Button color="secondary" simple to="/projects" size="lg">
              Go to Projects
            </Button>
         
          <SubscribeDialog/>
  
          
          </Box>

        </Container>
        </Box>
      </BackgroundImage>

      <Box my={4}>
        <DividedSection>
          {props.data.partners &&
            props.data.partners.nodes.map(company => (
              <img src={company.logoUrl} width="100px" alt={company.name} />
            ))}
        </DividedSection>
      </Box>
      <Box my={8}>
        <DividedSection>
          <Img fluid={props.data.kickoff.childImageSharp.fluid} />
          <Container>
            <Title variant="h4" align="left">
              What is kabis?
            </Title>
            <Text variant="body1" align="left">
              The KABIS project aim to focus and strengthen aquaculture related
              reserach and higher education in Western Norway to enhance
              innovation and transformation toward sustainable aquaculture
              systems.
            </Text>
          </Container>
        </DividedSection>
      </Box>
      <DividedSection height="50vh" info>
        <Box>
          <Title variant="h5" align="center">
            Education
          </Title>
          <Text variant="body1">
            Strenthen the educational offerings within sustainable aquaculture
            in the bergen region
          </Text>
        </Box>
        <Box>
          <Title variant="h5">Mobility</Title>
          <Text variant="body1">
            facilitate increased mobility for students and researcher between
            RnD institutions
          </Text>
        </Box>
        <Box>
          <Title variant="h5">Knowledge</Title>
          <Text variant="body1">
            The KABIS project aim to focus and strengthen
          </Text>
        </Box>
        <Box>
          <Title variant="h5">Innovations</Title>
          <Text variant="body1">
            The KABIS project aim to focus and strengthen
          </Text>
        </Box>
      </DividedSection>
      <Container maxWidth="md">
        <Box pt={8}>
          <Text align="center" variant="h4">
            "Kabis is a good project that will benefit the region, we do a lot
            of important stuff."
          </Text>
        </Box>
        <Box justifyContent="flex-end" mr={8}>
          <AvatarCard
            horizontal
            img={props.data.quote.avatarUrl}
            name={props.data.quote.fullname}
            role={props.data.quote.kabisrole}
            logo={props.data.quote.company.logoUrl}
            orgRole={props.data.quote.orgrole}
          />
        </Box>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
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
