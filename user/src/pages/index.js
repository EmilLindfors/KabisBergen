import React from "react"
import { graphql, Link } from "gatsby"
import {
  DividedSection,
  Title,
  Text,
  Button,
} from "gatsby-theme-material-foundry"
import { Container, Box, makeStyles, Grid, Divider } from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { AvatarCard, ProjectCard } from "../components/custom-cards"
import SubscribeDialog from "../components/subscribe-dialog"
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
              <Link to={company.website}>
              <img src={company.logoUrl} width="100px" alt={company.name} />
              </Link>
            ))}
        </DividedSection>
      </Box>
      <Box my={12}>
      <Container maxWidth="lg">
        <Title primary variant="h3" align="center">Students Corner 2020</Title>
        <Divider/>
        <Img fluid={props.data.studentsCorner.childImageSharp.fluid}/>
        <Text black paragraph>
          Are you a student and do you plan or are in the process of writing a
          thesis related to the aquaculture industry? Through the KABIS project,
          HVL Mohn Center, NCE Seafood and IHS we give 20 students the
          opportunity to show their master or bachelor thesis at the Aqkva
          conference 2020. <Link to="/students-corner">Read more</Link>
        </Text>
        </Container>
        </Box>
      <Box my={12}>
      <Container maxWidth="lg">
        <Title primary variant="h4"> KABIS Projects</Title>
        <Divider/>
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
                  backupImage={props.data.backupProjectImg.childImageSharp.fixed.src}
                />
              ))}
            </Grid>
            </Container>
      </Box>
   
      <Container maxWidth="md">
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
