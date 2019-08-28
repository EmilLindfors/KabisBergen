import React from "react"
import { graphql } from "gatsby"
import {
  Box,
  Icon,
  Grid,
  Avatar,
  makeStyles,
  Divider,
  Container,
} from "@material-ui/core"
import {
  Title,
  Text,
  DividedSection,
  TabPill,
} from "gatsby-theme-material-foundry"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Dashboard from "@material-ui/icons/People"
import Schedule from "@material-ui/icons/Business"
import List from "@material-ui/icons/List"
import Description from "@material-ui/icons/Description"
import { AvatarCard, CompanyCard } from "../components/custom-cards"

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 100,
    height: 100,
    marginRight: "24px",
  },
})

function AboutPage({ data }) {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="About HVL Skape" />
      <DividedSection
        black
        height="50vh"
        image={data.cover.childImageSharp.fixed.src}
        backgroundBlendMode="overlay"
        backgroundColor="#333333"
      >
        <Title variant="h2" align="center">
          About KABIS
        </Title>
      </DividedSection>
      <Container maxWidth="md">
        <TabPill
          alignCenter
          color="primary"
          tabs={[
            {
              tabButton: "Kabis",
              tabIcon: Description,
              tabContent: (
                <>
                  <Box p={6}>
                    <Title variant="h3" align="center" gutterBottom>
                      The KABIS Project
                    </Title>
                    <Text variant="body1" gutterBottom>
                      The aim of the KABIS project's current period has been to
                      focus and strengthen the aquaculture-oriented research and
                      higher education in Western Norway so that it builds on
                      the innovation and restructuring work that is underway to
                      develop environmentally friendly fish farming systems.
                      This applies to land-based recycling facilities (RAS) and
                      floating semi-closed systems in the sea (Semi-Closed
                      Containment Systems, S-CCS). The project had a start-up
                      meeting on 29.05.2018. Following this, KABIS has carried
                      out a number of activities, including the establishment of
                      2 PhD fellows, 1 bachelor's project at the University
                      College of Western Norway, 3 master's projects at UiB and
                      conducted conversations with Stirling University, UK,
                      Universitat Autonoma de Barcelona, ​​Spain, on the
                      development of a new student exchange program in the field
                      of sustainable aquaculture. A separate R&D forum has been
                      established to secure one the closest possible dialogue
                      between the actors during the project period, including
                      generating new R&D / PhD / master's project. All
                      activities are completed in collaboration with the
                      project's industrial partners. IN In the coming period,
                      KABIS will further develop its interaction the regional
                      aquaculture landscape by uniting, and strengthening, the
                      following competencies and offers:
                      <ul>
                        <li>
                          1. Develop needs-based and innovation-oriented
                          education programs (bachelor / master / civil, PhD).
                        </li>
                        <li>
                          2. Strengthen operational and applied research on
                          environmentally friendly aquaculture systems.
                        </li>
                        <li>
                          3. Develop research-based knowledge about innovation
                          in regional business environment with a focus on
                          implementing R&D results in the production,
                          facilitation and management of interaction-based
                          innovation processes.
                        </li>
                      </ul>
                    </Text>
                  </Box>
                </>
              ),
            },
            {
              tabButton: "Board",
              tabIcon: Dashboard,
              tabContent: (
                <>
                  <Container maxWidth="md">
                    <Box p={6}>
                      <Title variant="h3" align="center" gutterBottom>
                        Board
                      </Title>
                      <Text variant="h5" align="center" gutterBottom>
                        The KABIS project is governed by a board consisting of
                        representatives from the memeber firms and institutions
                        as well as observers and student representatives.
                      </Text>
                    </Box>
                  </Container>
                  <Grid container>
                    {data.people &&
                      data.people.nodes.map(person => (
                        <Grid item xs={6} md={4}>
                          <AvatarCard
                            img={person.avatarUrl}
                            name={person.fullname}
                            role={person.kabisrole}
                            logo={person.company.logoUrl}
                            orgRole={person.orgrole}
                          />
                        </Grid>
                      ))}
                  </Grid>
                </>
              ),
            },
            {
              tabButton: "Partners",
              tabIcon: List,
              tabContent: (
                <>
                  <Container maxWidth="md">
                    <Box p={6}>
                      <Title variant="h3" align="center" gutterBottom>
                        Partners
                      </Title>
                    </Box>
                  </Container>
                  <Grid container spacing={2}>
                    {data.partners &&
                      data.partners.nodes.map(company => (
                        <Grid item xs={6} md={4}>
                          <CompanyCard
                            logo={company.logoUrl}
                            name={`${company.name}`}
                            website={company.website}
                          />
                        </Grid>
                      ))}
                  </Grid>
                </>
              ),
            },
            {
              tabButton: "Members",
              tabIcon: Schedule,
              tabContent: (
                <>
                  <Container maxWidth="md">
                    <Box p={6}>
                      <Title variant="h3" align="center" gutterBottom>
                        industry Members
                      </Title>
                    </Box>
                  </Container>
                  <Grid container spacing={2}>
                    {data.industry &&
                      data.industry.nodes.map(company => (
                        <Grid item xs={6} md={4}>
                          <CompanyCard
                            logo={company.logoUrl}
                            name={`${company.name}`}
                            website={company.website}
                          />
                        </Grid>
                      ))}
                  </Grid>
                </>
              ),
            },
          ]}
        />
      </Container>
    </Layout>
  )
}
export const ItemPageQuery = graphql`
  query People {
    people: allGoogleSheetPeopleRow(sort: { fields: fullname, order: ASC }) {
      nodes {
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
    partners: allGoogleSheetCompaniesRow(
      filter: { partnertype: { eq: "Partner" } }
    ) {
      nodes {
        name
        website
        logoUrl
      }
    }
    industry: allGoogleSheetCompaniesRow(
      filter: { partnertype: { eq: "Industry Member" } }
    ) {
      nodes {
        name
        website
        logoUrl
      }
    }
    cover: file(relativePath: { eq: "kabis-kickoff.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 1920, height: 1080) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AboutPage
