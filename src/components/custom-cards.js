import React from "react"
import {
  Box,
  Grid,
  Icon,
  Divider,
  makeStyles,
  Avatar,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core"
import { Button, Title, Text } from "gatsby-theme-material-foundry"
import NextIcon from "@material-ui/icons/NavigateNextOutlined"
import Img from "gatsby-image"

const useStyles = makeStyles({
  avatar: {
    width: 100,
    height: 100,
    zIndex: -1,
    marginRight: "24px",
  },
  bigAvatar: {
    width: 150,
    height: 150,
    marginRight: "24px",
    zIndex: -1,
  },
  role: {
    fontSize: "14px",
    fontWeight: "600",
    minHeight: "50px",
    marginTop: "10px",
  },
  title: { marginBottom: "10px", marginTop: "20px" },
  logo: {
    maxWidth: "100px",
    borderRadius: "5px",
    maxHeight: "40px",
    backgroundColor: "white",
    marginTop: "-20px",
    padding: "5px",
    marginLeft: "50px",
  },
  logoCard: {
    maxWidth: "150px",
    maxHeight: "100px",
  },
  logoContainer: { minHeight: "150px" },
  card: {
    minHeight: "300px",
  },
})

export function AvatarCard({
  name,
  role,
  img,
  logo,
  horizontal,
  orgRole,
  imageClasses,
  linkedin,
  twitter,
  email,
}) {
  const classes = useStyles()
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection={horizontal ? "row" : "column"}
      p={2}
    >
      <Box align="center">
        <Avatar
          src={img}
          width="100px"
          className={horizontal ? classes.avatar : classes.bigAvatar}
        />

        {!horizontal && <img src={logo} className={classes.logo} />}
      </Box>
      <Box>
        <Title variant="h5" align="center" className={classes.title}>
          {name}
        </Title>

        <Divider />
        <Text info align="center" gutterBottom className={classes.role}>
          {role}
        </Text>

        <Box />

        <Box p={1} align="center">
          <Icon name={["fab", "linkedin"]} fixedWidth />
          <Icon name={["fab", "twitter"]} fixedWidth />
          <Icon name="envelope" fixedWidth />
        </Box>
      </Box>
    </Box>
  )
}

export function CompanyCard({ name, logo, website, imageClasses }) {
  const classes = useStyles()
  return (
    <Card
      display="flex"
      justifyContent="center"
      flexDirection="column"
      p={2}
      className={classes.card}
    >
      <Box align="center" pt={2} className={classes.logoContainer}>
        <img className={classes.logoCard} src={logo} alt={`${name} logo`} />
      </Box>
      <CardContent>
        <Title variant="h5" align="center" className={classes.title}>
          {name}
        </Title>
        <Divider />
        <Box align="center">
          <Button color="info" simple to={website}>
            Read More
            <NextIcon />
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}
