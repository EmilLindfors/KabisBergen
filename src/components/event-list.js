import React from "react"
import { Button, Badge, Title } from "gatsby-theme-material-foundry"
import {
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Box,
  Grid,
  Avatar,
  makeStyles,
} from "@material-ui/core"
import LocationIcon from "@material-ui/icons/LocationOn"
import CalendarIcon from "@material-ui/icons/CalendarToday"
import TimeIcon from "@material-ui/icons/Label"
import FoodIcon from "@material-ui/icons/Business"
import GroupIcon from "@material-ui/icons/Person"

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
  },
})

function GenerateList({
  horizontal,
  date,
  category,
  location,
  organization,
  projectPerson,
  person,
}) {
  const classes = useStyles()
  if (horizontal) {
    return (
      <Grid container flexDirection="row">
        {date && (
          <>
            <Grid item>
              <CalendarIcon fontSize="small" />
            </Grid>
            <Grid item>
              <Box ml={1} mr={2}>
                {date}
              </Box>
            </Grid>
          </>
        )}
        {category && (
          <>
            <Grid item>
              <TimeIcon fontSize="small" />
            </Grid>
            <Grid item>
              <Box ml={1} mr={2}>
                {category}
              </Box>
            </Grid>
          </>
        )}
        {location && (
          <>
            <Grid item>
              <LocationIcon fontSize="small" />
            </Grid>
            <Grid item>
              <Box ml={1} mr={2}>
                {location}
              </Box>
            </Grid>
          </>
        )}
        {organization && (
          <>
            <Grid item>
              <FoodIcon fontSize="small" />
            </Grid>
            <Grid item>
              {" "}
              <Box ml={1} mr={2}>
                {organization}
              </Box>
            </Grid>
          </>
        )}
        {person && (
          <>
            <Grid item>
              <GroupIcon fontSize="small" />
            </Grid>
            <Grid item>
              <Box ml={1} mr={2}>
                {person}
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    )
  } else {
    return (
      <List>
        {projectPerson && (
          <Box align="center">
            <Avatar
              src={projectPerson.avatarUrl}
              className={classes.bigAvatar}
            />
            <Title variant="h5" align="center" className={classes.title}>
              {projectPerson.fullname}
            </Title>
          </Box>
        )}
        {date && (
          <ListItem>
            <ListItemIcon>
              <CalendarIcon />
            </ListItemIcon>
            <ListItemText primary={date} />
          </ListItem>
        )}
        {category && (
          <ListItem>
            <ListItemIcon>
              <TimeIcon />
            </ListItemIcon>
            <ListItemText primary={category} />
          </ListItem>
        )}

        {location && (
          <ListItem>
            <ListItemIcon>
              <LocationIcon />
            </ListItemIcon>
            <ListItemText primary={location} />
          </ListItem>
        )}
        {organization && (
          <ListItem>
            <ListItemIcon>
              <FoodIcon />
            </ListItemIcon>
            <ListItemText primary={organization} />
          </ListItem>
        )}
        {person && !projectPerson && (
          <ListItem>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary={person} />
          </ListItem>
        )}
      </List>
    )
  }
}

export function GenerateTags({ tags, color }) {
  const tagArray = tags.split(",")
  return tagArray.map(tag => (
    <Badge color={color} key={tag}>
      {tag}
    </Badge>
  ))
}

export default GenerateList
