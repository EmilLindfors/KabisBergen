import React from "react"
import { graphql } from "gatsby"
import {
  DividedSection,
  Title,
  Text,
  Section,
} from "gatsby-theme-material-foundry"
import { Container, Box } from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Table = ({ headers, data }) => {
  return (
    <table>
      <tr>
        {headers.map(header => (
          <th>{header}</th>
        ))}
      </tr>

      {data.map(row => (
        <tr>
          {row.map(cell => (
            <td>{cell}</td>
          ))}
        </tr>
      ))}
    </table>
  )
}

function IndexPage(props) {

  return (
    <Layout>
       <SEO
        postDescription="Read and download the KABIS annual reports"
        postTitle="Annual Report"
        slug="annual-report"
        postImage="https://source.unsplash.com/Q5QspluNZmM/2000x1000"
      />
      <DividedSection
        black
        height="50vh"
        image="https://source.unsplash.com/Q5QspluNZmM/2000x1000"
      >
        <Box align="center">
          <Title variant="h1">Annual Report 2018</Title>
          <Title variant="subtitle">
            280782 - KAPASITETSLØFT FOR BÆREKRAFTIG OG INNOVATIV
            SJØMATPRODUKSJON (KABIS)
          </Title>
        </Box>
      </DividedSection>
      <Container maxWidth="md">
        <Box my={12}>
          <Section id="rapport-2018-innledning">
            <Title variant="h2" black>
              Innledning
            </Title>
            <Text paragraph>
              Målsetningen til KABIS-prosjektets inneværende periode har vært å
              fokusere og forsterke den havbruksorienterte forskning og høyere
              undervisningen på Vestlandet slik at denne bygger opp under det
              innovasjons- og omstillingsarbeid som pågår for å utvikle
              miljøvennlige oppdrettssystemer. Dette gjelder bl.a. landbaserte
              resirkuleringsanlegg (RAS) og flytende semi-lukkede anlegg i sjø
              (Semi-Closed Containment Systems, S-CCS). Prosjektet hadde
              oppstartsmøte 29.05.2018. I etterkant av dette har KABIS
              gjennomført en rekke aktiviteter herunder, etablering av 2 PhD
              stipendiater, 1 bachelorprosjekt ved Høgskulen på Vestlandet, 3
              masterprosjekt ved UiB samt gjennomført samtaler med Stirling
              University, UK, Universitat Autonoma de Barcelona, Spania, om
              utvikling av et nytt studentutvekslingsprogram innen bærekraftig
              havbruk. Ett eget FoU-forum er etablert for å sikre en tettest
              mulig dialog mellom aktørene under prosjektperioden, herunder
              generere nye FoU/PhD/masterprosjekt. Alle aktiviteter er
              gjennomført i samarbeid med prosjektets industrielle partnere. I
              kommende periode vil KABIS videreutvikle samspillet i det
              regionale havbrukslandskapet ved å forene, og styrke, følgende
              kompetanser og tilbud:
              <ol>
                <li>
                  Utvikle behovsbaserte og innovasjonsorienterte
                  utdanningsprogram (bachelor/master/siv.ing., PhD).
                </li>
                <li>
                  Styrke den operasjonelle og anvendte forskningen på
                  miljøvennlige oppdrettssystemer.
                </li>
                <li>
                  Utvikle forskningsbasert kunnskap om innovasjon i regionale
                  næringsmiljø med fokus på implementering av FoU-resultat i
                  produksjon, tilrettelegging og ledelse av samhandlingsbaserte
                  innovasjonsprosesser.
                </li>
              </ol>
            </Text>
          </Section>
          <Section>
            <Title variant="h2" black>
              Aktivitetsoversikt i 2018
            </Title>
            <Text paragraph>
              Fra oppstart av prosjektet har det vært en tett og god dialog
              mellom Universitetet i Bergen, Uni Research AS og Mohnsenteret for
              innovasjon og regional utvikling ved Høgskulen på Vestlandet
              (HVL). Dette samspillet har resultert i følgende aktiviteter:
            </Text>
            <Table
              headers={["rapport-2018-aktivitet", "Status 2018"]}
              data={[
                [
                  "A1: Å styrke den faglige kapasiteten hos FoU-institusjonene innen bærekraftig havbruk gjennom nyrekruttering og mobilitet - Næring til FoU",
                  "Påbegynt, stillinger besatt og under utlysning.",
                ],
                [
                  "A2: Å videreutvikle det faglige innhold i master/siv.ing.-studiet i samarbeid med næringen",
                  "Påbegynt, vekt på pensumrevidering",
                ],
                [
                  "A3: Å styrke utdanningen innen innovasjonsledelse og entreprenørskap med vekt på bærekraftig oppdrettsteknologi",
                  "Påbegynt, herunder pilotordning med åpning av HVL-fag og UiB-studenter mv.",
                ],
                [
                  "A4: Å etablere et nytt Phd program i innovasjon og entreprenørskap ved HVL",
                  "Påbegynt, innsendt søknad om akkreditering",
                ],
                [
                  "A5: Å sikre økt bruk av toveis mobilitet mellom FoU (studenter, forskere) og næring (ansatte) gjennom utveksling og hospitering",
                  "Påbegynt, diskusjon med næringen gjennom KABIS Impact Forum – etablert samarbeid med studentforening",
                ],
                [
                  "A6: Å etablere en arena under AqKva konferansen hvor studenter og næring treffes",
                  "Påbegynt, pilot 2018. 2019 er under planlegging.",
                ],
                [
                  "A7: Å etablere et internasjonalt samarbeid om studentutveksling mellom University of Stirling (Skottland), Universitat Autonoma de Barcelona (Spania) og FoU-institusjonene i Bergen",
                  "Påbegynt, gjennomført møte mellom aktørene i Barcelona. Planlagt møter våren 2019.",
                ],
                [
                  "A8: Å samarbeide med kompetansemeglere i MobiForsk Hordaland",
                  "Etablert, skal strykes",
                ],
                [
                  "A9: Å etablere ett forum for samhandling og kommunikasjon mellom FoU-miljø og oppdrettsnæring",
                  "Etablert «KABIS Impact Forum», skal styrkes",
                ],
                [
                  "A10: Sikre implementering av innovasjonsledelse i kommunikasjon og samhandling",
                  "Påbegynt",
                ],
                [
                  "A11: Å utvikle et nettverk av forskningsplattformer herunder bruk av RAS lab (ILAB), i kombinasjon med fullskala anlegg hos oppdrettere, for studenter, post doc og forskere",
                  "Delvis påbegynt",
                ],
                [
                  "A12: Å igangsette nye master og PhD-oppgaver basert på innspill fra bedriftspartnerne og som adresserer aktuelle forskningsproblemstillinger innen bærekraftig havbruk, herunder tilrettelegge for mobilitet i gjennomføringen av studentoppgaver",
                  "Påbegynt, herunder 2 phd-prosjekt, 3 masterprosjekt og 1bachelorprosjekt.",
                ],
                [
                  "A13: Å stimulere til nye anvendte FoU-aktiviteter som ikke er finansiert via andre offentlige finansieringskilder",
                  "Ikke påbegynt",
                ],
                [
                  "A14: Å bygge en kultur som sikrer uttesting av ny kunnskap, prosesser og/eller forskningsresultat i bedriftenes produksjon",
                  "Påbegynt, kontinuerlig",
                ],
                [
                  "A15: Å etablere ett samarbeid med SFI-senteret CtrlAQUA for å sikre samhandling og addisjonalitet mellom de ulike FoU prosjektene",
                  "Påbegynt",
                ],
                [
                  "A16: Gjennomføre en evaluering av de tre første årene av KABIS",
                  "Påbegynt, null-punktintervjuer",
                ],
              ]}
            />
          </Section>
          <Section id="rapport-2018-resultater">
            <Title variant="h2" black>
              Resultater
            </Title>
            <Title variant="h5" component="h3" black>
              Samarbeid mellom næringslivet og FoU institusjonen
            </Title>
            <Text paragraph>
              I perioden januar til medio februar ble det gjennomført besøk til
              alle Konsortium bedrifter for å informere om prosjektet. Følgende
              partnere ble besøkt; Bremnes Seashore, Hardingsmolt AS, Sævareid
              Fiskeanlegg, Linga laks, Eide fjordbruk og Blom fiskeoppdrett
              (eier Vik settefisk), Lerøy Seafood Group ASA, Marine Harvest,
              Blom fiskeoppdrett, Grieg Seafood ASA, Hardingsmolt og Tytlandsvik
              Akva. Dette er selskap som har en kombinert verts- og
              tilrettelegger rolle for aktiviteter i storskala RAS og
              lukkede/åpne anlegg. EcoMærden, Mærdslippen og AKVAgroup varetar
              tekniske utviklingsprosjekt.
            </Text>
            <Text paragraph>
              KABIS prosjektet har bidratt til et økt samarbeid mellom akademia
              og havbruksbedriftene på Vestlandet. Dette kom klart frem gjennom
              bedriftenes engasjement i KABIS Impact Forum (24.09.2018). På
              dette møtet var alle bedriftene, FoU partnerne og
              studentrepresentanter representert og målsetningen var å diskutere
              nye problemstillinger i næringen som kan danne grunnlag for
              FoU/studentoppgaver. Møtet resulterte i en rekke forslag til nye
              prosjekt og som vil aktiveres som konkrete oppgaver kommende
              periode. Utover nye FoU prosjekt ble det også diskutert mulighet
              for å etablerer ett Forum for mobilitetsprogram mellom næring,
              studenter og forskere. Ulike modeller blir vurdert og målsetningen
              er å få til studentmobilitet 2. kvartal 2019. Følgende konkrete
              FoU prosjekt er påbegynt/gjennomført under KABIS og innbefatter
              arbeid ute hos bedriftene.
            </Text>
            <Title variant="h5" component="h3" black>
              Påbegynte PhD prosjekt
            </Title>
            <ul>
              <li>
                Enrique Pino Martínez (oppstart 1. Januar), Salmon Aquaculture
                for the Future (SAFT)
              </li>
              <li>
                Tharmini Kalananthan (oppstart 1. Mai), Neuroendocrine factors
                involved in appetite control.
              </li>
            </ul>
            <Title variant="h5" component="h3" black>
              Master Studenter
            </Title>
            <ul>
              <li>
                Gunnar Mercoll Berg (avsluttet 6), November, Neuroendocrine
                factors involved in appetite control and feed intake in Atlantic
                salmon (Salmo salar) reared in Recirculating Aquaculture Systems
                (RAS).
              </li>
              <li>
                Tarald Kleppa Øvrebø (oppstart 1 Nov), Postsmoltproduksjon i
                semi-lukket anlegg: Resultat fra 5 generasjoner fisk i Preline.
              </li>
              <li>
                Markus Førde Braanaas (1. November), Early maturation in salmon
                smolts produced in RAS.
              </li>
            </ul>
            <Title variant="h5" component="h3" black>
              Bachelorstudenter ved HVL
            </Title>
            <ul>
              <li>
                Caroline Ulvesæter og Nathalie Reiertsen ved Havteknologi skal
                skrive bacheloroppgave i samarbeid med AKVA-Group (oppstart
                vår). Fokuset vil være valg av overflatebehandling for
                landbaserte anlegg og er et av problemområdene AKVA-Group trakk
                frem på KABIS Impact Forum.
              </li>
            </ul>
            <Title variant="h5" component="h3" black>
              Etablering av nye evt. styrking av eksisterende studietilbud
            </Title>
            <Text paragraph>
              Gjennom KABIS tilsetningene som er listet opp i underliggende
              tekst har UiB oppnådd en betydelig styrking av undervisnings- og
              veiledningskapasitet kommende prosjektperiode. Denne kapasiteten
              vil benyttes til å utarbeide ett nytt studiemateriell for kursene
              BIF-200 og ING-101 hvilket er sentralt i det nyetablerte siv. ing.
              programmet ved UiB. Kapasitetsøkningen er viktig da en forventer
              inntil 25 nye siv. ing. studenter pr år innen havbruk i tiden som
              kommer. Fra HVL har en sendt inn søknad om akkreditering til
              phd-program i ansvarlig innovasjon og regional utvikling, hvilket
              vil representere en betydelig styrkning av eksisterende
              studietilbud gitt positiv godkjenning.
            </Text>
            <Title variant="h5" component="h3" black>
              Samarbeidet med nasjonale og internasjonale FoU institusjoner
            </Title>
            <Text paragraph>
              Ett sentralt mål i KABIS er å etablere et nytt internasjonalt
              studentutvekslingsprogram innen bærekraftig havbruk mellom
              Universitetet i Bergen, Høyskolen på Vestlandet, Stirling
              University, UK, Universitat Autonoma de Barcelona, Spania. Dette
              arbeidet er startet og det ble avholdt ett partnermøte i
              Barcelona, 12-14 november hvor bl.a. undervisningstilbud,
              forskningsoppgaver og finansiering ble diskutert. Neste møte
              (Bergen) vil bli avholdt 18-20 februar.
            </Text>
            <Title variant="h5" component="h3" black>
              Styrking av FoU institusjonen sin faglige kapasitet
            </Title>
            <Text paragraph>
              KABIS har pt. etablert en administrativ og faglig kapasitet som
              vil dekke prosjektets behov for undervisnings- og
              veiledningskapasitet kommende prosjektperiode. Kort oppsummert;
              Gjennom UNI har KABIS tilsatt tre Forsker I stillinger (Sigurd
              Handeland, 50%, Tom Nilsen, 30% og Simon Mackenzie, 20%) innen
              henholdsvis havbruksteknologi, tidlig kjønnsmodning og immunologi.
              Undervisningskapasitet innen vannkvalitet er kjøpt inn fra NIVA
              (Åse Åtland, 20 %). I tillegg har prosjektet ansatt en Forsker
              (100%, Pablo Balseiro) i eksperimentell biologi og molekylære
              metoder i moderne havbruk. Videre har UiB tilsatt tre Prof II som
              dekker fagfeltene; Fiskefysiologi (Tom Nilsen), velferd (Lars
              Ebbesson) og intensiv produksjon (Sigurd Handeland). I tillegg har
              KABIS, gjennom Mohnsenteret, etablert en forskerstilling (Øyvind
              Berge, 50 %) innen Ledelse av komplekse og tverrfaglige
              innovasjonsprosesser, samt en fasilitator stilling (Marit Eggen,
              50 %) med ansvar å sikre god administrativ koordinering av
              prosjektet (møter, rapporter, samhandling FoU og næring etc.).
              Økonomisk kontroller er sikret gjennom UNI (Ann Cathrine Jakobsen,
              20 %). For å sikre god samhandling mellom UIB, HVL og næringen på
              siv.ing. studiet er det opprettet en undervisningsstilling på UiB,
              Bio (Jens Kristian Fosse, 10 %). Undervisningskraft fra næring er
              sikret gjennom 1 stk 20 % stilling (Harald Sveier, Lerøy).
            </Text>
            <Title variant="h5" component="h3" black>
              Kjønnsbalanse
            </Title>
            <Text paragraph>
              Institusjonene bak KABIS har som mål å ha en mangfoldig og
              inkluderende arbeidskultur preget av likeverd og toleranse,
              herunder inneha en best mulig kjønnsbalanse blant forskere,
              studenter og øvrige næringsrepresentanter. Det å sikre god
              kjønnsbalanse er noe vi vil være opptatt av når vi skal rekruttere
              forskere, studenter og brukerrepresentanter. Det kan nevnes at 5
              av 10 representanter i styringsgruppen samt en av to stipendiater
              er kvinner. I tillegg er en av prosjektressursene i KABIS
              involvert i FORREGION-prosjektet Vest Ut og Fram (VUF), som har
              som formål å øke andel av kvinnelige prosjektledere i FoU- og
              innovasjonsprosjekt i regionale bedrifter. Prosjektet er et
              samarbeid mellom CMR, Bergen Teknologioverføring og Høgskulen på
              Vestlandet v. Mohnsenteret. Hovedfokuset ligger på bedrifter innen
              hav- og energinæringen med spesielt fokus på muliggjørende
              teknologi og bærekraftig utvikling. VUF vil utnytte koblingen til
              KABIS til å kommunisere aktiviteter og FoU-virkemidler og
              muligheter for kvinner i havbruksnæringen.
            </Text>
            <Title variant="h5" component="h3" black>
              Samarbeid med mobiliseringsprosjekt
            </Title>
            <Text paragraph>
              To av medarbeiderne i KABIS er også kompetansemeglere i
              mobiliseringsprosjektet i Hordaland «MobiFORSK». En leder også
              «Marint team» som er et koordineringsmøte mellom institusjonene
              som driver med kompetansemegling innen havbruk og
              innovasjonsmegleren til NCE Seafood innovation Cluster og
              representerer KABIS inn i denne koordineringen. Prosjektleder for
              KABIS skal presentere prosjektet på neste møte i Marint team, hvor
              det planlegges en diskusjon om felles aktiviteter og samarbeid.
              Det planlegges videre et samarbeidsmøte med
              kapasitetsløftprosjektet «Teknoløftet Sogn og Fjordane» primo
              2019.
            </Text>
            <Text paragraph>
              Mohnsenteret ved HVL er ansvarlig for gjennomføring av
              nullpunktsanalyse for prosjektet. Dette arbeidet innbefatter
              gjennomføring av ett dybdeintervju med hver partner og ble
              påbegynt like etter sommeren. Arbeidet vil følges opp med
              ansettelse av en stipendiat tidlig 2019.
            </Text>
            <Title variant="h5" component="h3" black>
              Kommunikasjon
            </Title>
            <Text paragraph>
              KABIS vil publisere forskningsresultater av topp kvalitet i
              vitenskapelige tidsskrifter med høy effekt, internasjonalt
              peer-reviewed. Vi vil også presentere nye resultater på nasjonale
              og internasjonale vitenskapelige konferanser (F.eks European
              aquaculture), samt mindre workshops med målrettet fokus på RAS og
              S-CCS (F.eks Fremtidens smoltproduksjon og AqKva). Alle
              publikasjoner som kommer fra KABIS vil bli offentliggjort. Vår
              kommunikasjon skjer hovedsakelig gjennom kommunikasjonsavdelingene
              ved Uni Research, UiB og Mohnsenteret og som benytter et bredt
              spekter av elektroniske, trykte og sosiale medier (Facebook,
              Twitter, Instagram og Snapchat) for populærvitenskapelig
              kommunikasjon av forskningsprosjekter og resultater. KABIS har
              utarbeidet egen logo og vil etablere en nettside i løpet av kort
              tid.
            </Text>
            Student’s Corner under Aqkva-konferansen vil være en plattform for å
            formidle studentarbeid (bachelor- og masterprosjekt) mot næringen.
            Konseptet ble testet ut 18 januar 2018 og videreutvikles i 2019.
            Rekrutteringsprosessen er allerede i gang og det er ansatt to
            studentassistenter som skal arbeide med promotering, tillaging av
            stand-materiell og bistå på selve dagen. Til arbeidet er det også
            blitt laget en egen underside på hjemmesiden til konferansen hvor
            studenter kan lese om å melde seg på Student’s Corner. Se nettsiden
            http://aqkva.no/aqkva-konferansen/student.
            <Text paragraph></Text>
          </Section>
          <Section id="rapport-2018-vurdering">
            <Title variant="h2" black>
              Vurdering
            </Title>
            <Text paragraph>
              Prosjektet har så langt hatt en positiv progresjon og vi har stort
              sett fulgt oppsatte planer og definerte målsetninger. Etter
              oppstart har prosjektgruppen hatt månedlige prosjektmøter for å
              sikre fremdrift og økonomi. KABIS har også gjennomført den
              planlagte ansettelse av nye resurspersoner og er således rigget
              til å møte fremtidens behov innen utdanning og veiledning ved UiB
              og Mohnsenteret. Ihht oppsatt aktivitetsplan har prosjektet
              gjennomført og imøtekommet følgende milepæler:
            </Text>
            <ul>
              <li>
                MP1: Ny næringsrelevant kunnskap og studiemateriell er integrert
                i nytt siv.ing studie. For MP1 vises det til vår revisjon av det
                nyopprettede kurset BIF-200 og som i år uteksaminerte over 50
                studenter.
              </li>
              <li>
                MP7: Et nytt nettverk av forskningsplattformer (liten og stor
                skala) er etablert. For MP7 vises det til bedriftsnettverket ble
                etablert under første KABIS Impact Forum møte og som skal
                tilrettelegge for mobilitet for studenter under utdanning
                (Kursing, prosjekt og sommerjobb). Arbeidet med å etablere en
                utvekslingsavtale mellom de norske institusjonene (HVL og UiB)
                og det Skotske University of Stirling, og det Spanske
                Universitat Autonoma Barcelona er godt i gang. Målsettingen er å
                få gjennomført første studentutveksling høsten 2019.
              </li>
              <li>
                MP8: Nye problemområder innen biologiske tema er definert
                (vannkvalitet, Intensiv produksjon etc). For MP7 vises det til
                notatet som ble utarbeidet under KABIS Impact Forum og som
                definerer nye viktige FoU oppgaver som skal adresseres gjennom
                bruk av studenter og forskere.
              </li>
            </ul>
          </Section>
          <Section id="rapport-2018-vurdering">
            <Title variant="h2" black>
              Handlingsplan for 2019
            </Title>
            <Text paragraph>
              Prosjektet har så langt ikke støtt på noen uventede utfordringer.
              Som nevnt innledningsvis hadde prosjektet oppstartsmøte
              29.05.2018. Etter dette har vi fulgt gjeldende aktivitetsplan for
              2018 med fokus på oppnåelse av milepæler nedfelt i
              prosjektbeskrivelsen. Etter formell oppstart (02.01.2018) begynte
              prosjektgruppen arbeidet med å organisere KABIS prosjektet,
              gjennomføre aktiviteter herunder lyse ut nye stillinger som en del
              av ansettelsesprosessene definert i prosjektplanen. Disse
              ansettelsene er nå i hovedsak gjennomført, men har tatt noe tid
              spesielt på UiB hvor alle ansettelser må godkjennes på
              fakultetsnivå. Frem til nå har KABIS etablert 2 PhD stipend, 3
              master og 2 bachelor oppgaver. Dette er påbegynte eksperimentelle
              oppgaver som gjennomføres i samarbeid med industrien og som vil
              fortsette kommende periode. Resultatet av forsinkelsene er at
              KABIS ved årsslutt ikke vil få brukt opp alle tildelte midler for
              inneværende periode. Prosjektleder vil derfor utarbeide en søknad
              til NFR om at overskytende midler overføres til 2019. En slik
              søknad vil sendes fra UNI innen 31.12.2018. I 2019 vil KABIS følge
              oppsatt plan i prosjektbeskrivelsen. Med alle menneskelige og
              økonomiske ressurser på plass er KABIS i posisjon til å oppnå alle
              mål som er satt for 2019.
            </Text>
          </Section>
        </Box>
      </Container>
      >
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query AnnualReportPage {
    cover: file(relativePath: { eq: "cover.jpg" }) {
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
