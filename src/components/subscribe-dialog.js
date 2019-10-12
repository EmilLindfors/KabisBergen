import React from "react"

import {
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  IconButton,
  Box
} from "@material-ui/core/"
import { useTheme } from "@material-ui/styles"
import { Title, Button } from "gatsby-theme-material-foundry"
import CloseIcon from "@material-ui/icons/Close"

function SubscribeDialog() {
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"))

    const [open, setOpen] = React.useState(false)
    function handleClickOpen() {
      setOpen(true)
    }
  
    function handleClose() {
      setOpen(false)
    }
  
    return (
      <React.Fragment>
         <Button
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
        size="lg"
      >
        Subscribe to newsletter
      </Button>
        <Dialog
          fullScreen={fullScreen}
          maxWidth="lg"
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <Box display="flex" justifyContent="space-between" alignItems="baseline">
            <Title black variant="h4">
            Subscribe
            </Title>
         
          <IconButton aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          </Box>
          </DialogTitle>
          <DialogContent>
          <iframe width="400px" height="500px" style={{border: "none"}} src="https://cdn.forms-content.sg-form.com/2029b17b-ecb3-11e9-9033-aaa63ca798dc"/>
       
          </DialogContent>
        </Dialog>
      </React.Fragment>
    )
  }
  
  export default SubscribeDialog;