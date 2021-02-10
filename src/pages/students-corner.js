import React from "react"
import { graphql } from "gatsby"
import { Title, Text, Section, Button } from "gatsby-theme-material-foundry"
import {
  Container,
  Box,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Check from "@material-ui/icons/CheckBox"
import Star from "@material-ui/icons/Star"
//import Form from "../components/students-corner-form"
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
  },
}))

const applyto = [
"In the application form below you will register who you are and where you study.",
"You will fill out a summary of the project you wish to present at the conference.",
"You will receive a confirmation email with more details and a link to previous year's posters.",
"We will notify the selected participants in December."
]

function IndexPage(props) {
  const img = props.data.cover.childImageSharp.fluid
  const classes = useStyles()
  return (
    <Layout dark>
      <SEO
        postDescription="Attend the student's corner at the Aqkva conference the 16th of January 2020"
        postTitle="Student's Corner"
        slug="students-corner"
        postImage={props.data.seoCover.childImageSharp.fixed.src}
      />
      <BackgroundImage
        alt={`cover picture`}
        fluid={img}
        className={classes.hero}
      >
        <Box align="center" py={16}>
          <Container maxWidth="md">
            <Title variant="h1">Student's Corner</Title>
            <Title variant="h4">
              Stay tuned for student corner in 2022
            </Title>
          </Container>
        </Box>
      </BackgroundImage>
      <Container maxWidth="md">
        <Title variant="h2" black>
        Student’s Corner: your chance to showcase your aquaculture-related project to the industry!  
        </Title>

        <Text paragraph>
        Are you a student in the process of writing a bachelor or master thesis related to the aquaculture industry? Or maybe you are working on an exciting business opportunity related to the industry? Each year the KABIS-project gives several students the opportunity to show their aquaculture-related project at the Aqkva conference.  
        </Text>
        <Text paragraph>
        Every student elected to the Student’s Corner will receive an A3 template to be filled out with information about ongoing or planned projects or business ideas. 
        </Text>
        <Title variant="h3" black>
          Who are you?
        </Title>
        <List>
          <ListItem>
            {" "}
            <ListItemIcon>
              <Check color="primary" />
            </ListItemIcon>
            Student at a master or bachelor level at a Norwegian university.
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Check color="primary" />
            </ListItemIcon>
            You are writing, or have started to write, a thesis related to the aquaculture industry. 
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Check color="primary" />
            </ListItemIcon>
            ...or you have a business idea related to the aquaculture industry. 
          </ListItem>
        </List>
        <Title variant="h3" black>
          What do you get?
        </Title>
        <List>
          <ListItem>
            {" "}
            <ListItemIcon>
              <Star color="primary" />
            </ListItemIcon>
            You join the "Best Poster" competition where the winner receives kr 10.000,- 
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Star color="primary" />
            </ListItemIcon>
            The conference fee and dinner will be paid for and completely free (value: kr 4433,75,-) 
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Star color="primary" />
            </ListItemIcon>
            You get the chance to present your work at Norway's largest aquaculture conference. 
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Star color="primary" />
            </ListItemIcon>
            You get the opportunity to meet industry players form the entire value chain and create a valuable network.  
          </ListItem>
        </List>
        <Box align="center" py={16}>
        <Title variant="h3" black>
          Check back in 2022
        </Title>
        </Box>
        </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query StudentsCornerPage {
    cover: file(relativePath: { eq: "sc_cover.jpg" }) {
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
    seoCover: file(relativePath: { eq: "sc_cover.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 1300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
