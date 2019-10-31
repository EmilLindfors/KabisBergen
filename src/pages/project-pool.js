import React from "react"
import { graphql } from "gatsby"
import { Title, Text, Button } from "gatsby-theme-material-foundry"
import {
  Container,
  Box,
  makeStyles,
  Card,
  CardContent,
  CardActions,
  Grid,
  Divider,
} from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
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

function IndexPage(props) {
  const img = props.data.cover.childImageSharp.fluid
  const classes = useStyles()
  return (
    <Layout dark>
      <SEO
        postDescription="The Impact Forum is an arena where the
        project’s industry partners are invited to openly share current
        challenges and issues related to operations (technical and biological)
        and business."
        postTitle="Project Pool"
        slug="imapct-forum"
        postImage={img.src}
      />
      <BackgroundImage
        alt={`cover picture`}
        fluid={img}
        className={classes.hero}
      >
        <Box align="center" py={16}>
          <Container maxWidth="md">
            <Title variant="h1">Project Pool</Title>
            <Title variant="h4">
              Potential bachelor, master or PhD projects.
            </Title>
          </Container>
        </Box>
      </BackgroundImage>
      <Container maxWidth="md">
        <Title variant="h4" black>
          Driftsoppsett/operasjonelle betingelser og helse/stress
        </Title>
        <Divider />
        <Box mt={4} mb={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent style={{ minHeight: "250px" }}>
                  <Text variant="h5" black gutterBottom>
                    Astaxhantin
                  </Text>
                  <Text paragraph>
                    Observasjon i ecomerden – fisk som kommer ut av ecomerden
                    har høyere andel av fargestoff /astaxanthin enn de som går i
                    åpen merd. Hypotese: Dette har noe med immunsystemet å
                    gjøre. Gjøre flere og dypere studier på dette
                  </Text>
                </CardContent>
                <CardActions>
                  <Button size="small" color="secondary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent style={{ minHeight: "250px" }}>
                  <Text variant="h5" black gutterBottom>
                    Storsmolt
                  </Text>
                  <Text paragraph>
                    Teste ulike produksjonsprotokoller av storsmolt og teste
                    konsekvenser i sjø. Identifisere nyanser i
                    produksjonsprotokoller som kan ha carry-over effekt på
                    ytelse, helse..- sjøvannspresentasjoner osv.
                  </Text>
                </CardContent>
                <CardActions>
                  <Button size="small" color="secondary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Title variant="h4" black>
          Fiskevelferd
        </Title>
        <Divider />
        <Box mt={4} mb={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent style={{ minHeight: "250px" }}>
                  <Text variant="h5" black gutterBottom>
                    Fiskevelferd og lus
                  </Text>
                  <Text paragraph>
                    Økende behandling og håndtering; termisk behandling. Opplevd
                    smerte – mange i matfiskbransjen som er opptatt av dette.
                    Håndtering av fisk er kanskje en viktigere parameter på
                    robusthet – også med tanke på motstandsevne på lakselus FHF
                    – har kommet med en stor bok om parametere på fiskevelferd –
                    dette kan brukes
                  </Text>
                </CardContent>
                <CardActions>
                  <Button size="small" color="secondary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent style={{ minHeight: "250px" }}>
                  <Text variant="h5" black gutterBottom>
                    Robusthet mot lus som velferdsindikator
                  </Text>
                  <Text paragraph>
                    Smitteforsøk med lus / Kan en gjøre smitteforsøk med lus på
                    Preline-fisk med treningseffekt? Teste postsmolt i
                    luselab’en? Lusemotstand – effekt av postsmoltproduksjon på
                    land – vist større lusemotstand. Hypotese: denne fisken har
                    opparbeidet et robust slimlag under kontrollerte forhold som
                    gjør den mer robust og motstandsdyktig ved utsett
                  </Text>
                </CardContent>
                <CardActions>
                  <Button size="small" color="secondary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent style={{ minHeight: "250px" }}>
                  <Text variant="h5" black gutterBottom>
                    Tetthet av fisk
                  </Text>
                  <Text paragraph>
                    Hva er optimal tetthet i merd? Har tetthet noe å si på
                    velferd? Lokalitetsavhengighet. Det er viktigere å fokusere
                    på at hver enkelt fisk lever under gode forhold. Oppførsel i
                    merd (svømmeaktivitet) er kanskje viktigere enn tetthet i
                    seg selv. Tetthet går mer på reguleringsregime – lokaliteter
                    og biomasse.
                  </Text>
                </CardContent>
                <CardActions>
                  <Button size="small" color="secondary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query ProjectPool {
    cover: file(relativePath: { eq: "format_impact_forum.jpg" }) {
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
  }
`
