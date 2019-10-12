import React from "react"
import { graphql } from "gatsby"
import {
  DividedSection,
  Title,
  Text,
  Section
} from "gatsby-theme-material-foundry"
import {
  Container,
  Box,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Check from "@material-ui/icons/CheckBox"
import Star from "@material-ui/icons/Star"
import Form from "../components/students-corner-form"


function IndexPage(props) {

  return (
    <Layout>
      <SEO title="Students Corner" slug="students-corner"/>
      <DividedSection
        black
        height="50vh"
        image="https://source.unsplash.com/Q5QspluNZmM/2000x1000"
      >
        <Box align="center">
          <Title variant="h1">Students Corner</Title>
          <Title variant="subtitle">
            join the students corner during the Aqkva-conference 16th of January
            2020
          </Title>
        </Box>
      </DividedSection>
      <Container maxWidth="md">
        <Title variant="h2" black>
          Show off your hard work to the aquaculture industry
        </Title>

        <Text paragraph>
          Are you a student and do you plan or are in the process of writing a
          thesis related to the aquaculture industry? Through the KABIS project,
          HVL Mohn Center, NCE Seafood and IHS we give 20 students the
          opportunity to show their master or bachelor thesis at the Aqkva
          conference 2020.
        </Text>
        <Text paragraph>
          Every student will receive an A3 template to be filled out with
          information about ongoing or planned master or bachelor project. If
          you feel like this is something for you, please dont hesitate about
          filling out the form below and we will contact you with more details.
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
            Student på masternivå eller bachelornivå på høgskule eller
            universitet i Norge
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Check color="primary" />
            </ListItemIcon>
            Du har skrive - eller er i gong med å skriva ei oppgåve relatert til
            havbruksnæringa
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Check color="primary" />
            </ListItemIcon>
            ....eller du har en forretningsidè knyttet til næringa
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
            Du er med i konkurransen om å vinna pris for beste poster: kr
            10.000,-
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Star color="primary" />
            </ListItemIcon>
            Du får dekka konferanseavgift og festmidaggen om kvelden
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Star color="primary" />
            </ListItemIcon>
            Du får vist deg fram på Norges største havbrukskonferanse
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Star color="primary" />
            </ListItemIcon>
            Du får møta aktørar frå heile næringskjeda og knyta verdifulle
            kontaktar
          </ListItem>
        </List>
        <Title variant="h3" black>
          Apply to participate
        </Title>
        <ol>
          <li>
            På påmeldingssida (link under) registrerer du deg med navn,
            kontaktinformasjon, kva du studerer og kor du studerer.
          </li>
          <li>
            {" "}
            Du vil bli bedt om å gje eit lite abstrakt av prosjektet eller
            oppgåva du ønskjer å presentera under konferansen. I skildringa
            ønskjer me at du inkluderer problemstilling, metode, funn (om
            relevant), og konklusjon (om relevant)
          </li>
          <li>I løpet av desember vil du få beskjed om du vert valgt ut</li>
        </ol>
      </Container>
      <Section id="students-corner-form">
      <Container maxWidth="md">
      <Form/>
      </Container>
      </Section>
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
        fixed(width: 2000, height: 800) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
