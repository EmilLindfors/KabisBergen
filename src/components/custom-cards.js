import React from "react"
import { Box, Grid, Icon, Divider, makeStyles, Avatar } from "@material-ui/core"
import { Button, Title, Text } from "gatsby-theme-material-foundry"
import NextIcon from "@material-ui/icons/NavigateNextOutlined"
import Img from "gatsby-image"

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

export function AvatarCard({
  name,
  role,
  img,
  imageClasses,
  linkedin,
  twitter,
  email,
}) {
  const classes = useStyles()
  return (
    <Box display="flex" justifyContent="center" flexDirection="column" p={2}>
      <Box align="center">
        <Avatar src={img} width="100px" className={classes.bigAvatar} />
      </Box>
      <Box>
        <Title variant="h5" align="center">
          {name}
        </Title>
        <Text variant="subtitle2" muted align="center" gutterBottom>
          {role}
        </Text>

        <Box p={1} align="center">
          <Icon name={["fab", "linkedin"]} fixedWidth />
          <Icon name={["fab", "twitter"]} fixedWidth />
          <Icon name="envelope" fixedWidth />
        </Box>
      </Box>
    </Box>
  )
}
