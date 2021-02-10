import React from "react"
import { graphql } from "gatsby"
import {
  Box,
  Grid,
  Container,
  makeStyles
} from "@material-ui/core"
import {
  Title,
  Text,
  Button,
  TabPill,
} from "gatsby-theme-material-foundry"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Dashboard from "@material-ui/icons/People"
import Schedule from "@material-ui/icons/Business"
import List from "@material-ui/icons/List"
import Description from "@material-ui/icons/Description"
import { AvatarCard, CompanyCard } from "../components/custom-cards"
import Subscribe from "../components/subscribe-dialog"
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
  }
}));

function AboutPage({ data }) {
const classes = useStyles();
  return (
    <Layout>
             <SEO
        postDescription="About the KABIS Project"
        postTitle="About Us"
        slug="about"
      />
        <BackgroundImage
        alt={`cover picture`}
        fluid={data.cover.childImageSharp.fluid}
        className={classes.hero}
      >
        <Box align="center" py={16}>
        <Title variant="h2" align="center">
          About KABIS
        </Title>
        </Box>
      </BackgroundImage>
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
                    <Img
        alt={`org picture`}
        fluid={data.orgPic.childImageSharp.fluid}
      />
                    <Text variant="body1" gutterBottom>
                      The aim of the KABIS project's current period has been to
                      focus and strengthen the aquaculture-oriented research and
                      higher education in western Norway so that it builds on
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
                    <Box align="center" py={8}>
                     <Text color="secondary">For mer info send en mail til</Text>
                    <Button size="lg" color="primary" to="mailto:info@kabis.no">info@kabis.no</Button>
                    </Box>
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
                        Industry Members
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
    people: allPeople(sort: { fields: fullname, order: ASC }) {
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
    partners: allCompanies(filter: { type: { eq: "Partner" } }) {
      nodes {
        name
        website
        logoUrl
      }
    }
    industry: allCompanies(filter: { type: { eq: "Industry Member" } }) {
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
        fluid(maxWidth: 2000,
          duotone: { highlight: "#006381", shadow: "#004357" }
          traceSVG: { color: "#004357" }) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    orgPic: file(relativePath: { eq: "Orgkart.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800,
          duotone: { highlight: "#006381", shadow: "#004357" }
          traceSVG: { color: "#004357" }) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
