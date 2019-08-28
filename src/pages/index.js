import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  DividedSection,
  Title,
  Text,
  Section,
  Button,
} from "gatsby-theme-material-foundry"
import { Grid, Container, Divider, Box } from "@material-ui/core"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { AvatarCard } from "../components/custom-cards"

function IndexPage(props) {
  const img = props.data.cover.childImageSharp.fixed.src

  return (
    <Layout>
      <SEO title="Home" />
      <DividedSection
        black
        image={img}
        height="80vh"
        backgroundBlendMode="overlay"
        backgroundColor="#333333"
      >
        <Container maxWidth="sm" align="center">
          <Title variant="h3" align="center">
            Aquaculture reserach and education in Bergen, Norway
          </Title>
          <Text variant="h5" align="center">
            Capacity-lift for Sustainable and Innovative Aquaculture Production
          </Text>
          <Box m={2}>
            <Button color="primary" to="/">
              See Projects
            </Button>
          </Box>
        </Container>
      </DividedSection>
      <DividedSection>
        {props.data.partners &&
          props.data.partners.nodes.map(company => (
            <img src={company.logoUrl} width="100px" />
          ))}
      </DividedSection>
      <DividedSection height="80vh">
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
        fixed(width: 1920, height: 1080) {
          ...GatsbyImageSharpFixed
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
    partners: allGoogleSheetCompaniesRow(
      filter: { partnertype: { eq: "Partner" } }
    ) {
      nodes {
        name
        website
        logoUrl
      }
    }
    quote: googleSheetPeopleRow(fullname: { eq: "Sigurd Handeland" }) {
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
