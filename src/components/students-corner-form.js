import React from "react"
import {
  Divider,
  TextField,
  Box,
  MenuItem,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Grid,
} from "@material-ui/core"
import { Button as FoundryButton } from "gatsby-theme-material-foundry"
import { makeStyles } from "@material-ui/core/styles"
import { Form, Formik } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  mySchool: Yup.string().required("You have to choose a school"),
  myName: Yup.string().required("You have to write a name"),
  myEmail: Yup.string()
    .required("You have to write an email")
    .email("need to be an email"),
  fieldOfStudy: Yup.string().required("Please supply your field of study"),
  description: Yup.string()
    .min(1, "The summary has to be at minumum 100 words")
    .required("The summary has to be at minumum 100 words"),
})

const useStyles = makeStyles(theme => ({
  root: {
    "& label.Mui-focused": {
      color: theme.palette.black.main,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: `${theme.palette.black.main}`,
      },
    },
  },
  "& input:valid:focus + fieldset": {
    borderColor: theme.palette.black.main,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: "100%",
  },
  button: {
    margin: theme.spacing(1),
  },
  field: {
    margin: theme.spacing(1),
  },
}))

const school = [
  {
    value: "NHH",
    label: "NHH - Norwegian School of Economics",
  },
  {
    value: "HVL",
    label: "HVL - Western Norway university of Applied Sciences",
  },
  {
    value: "UiB",
    label: "UiB - University in Bergen",
  },
  {
    value: "BI",
    label: "BI - Norwegian Business School",
  },
  {
    value: "UiO",
    label: "UiO - University in Oslo",
  },
  {
    value: "UiS",
    label: "UiS - University in Stavanger",
  },
  {
    value: "NTNU",
    label: "NTNU - Norwegian University of Science and Technology",
  },
  {
    value: "Other Domestic",
    label: "Other Domestic - Other Norwegian University ",
  },
  {
    value: "Other International",
    label: "Other International - Other International University ",
  },
]

const MyForm = () => {
  const classes = useStyles()

  return (
    <Formik
      initialValues={{
        myName: "",
        mySchool: "",
        fieldOfStudy: "",
        myEmail: "",
        typeOfApplication: "",
        description: "",
        attendDinner: "",
        allergies: "",
        subscribe: false,
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {

        const msg =
          `name: ${values.myName}, ` +
          `Email: ${values.myEmail}, ` +
          `School and field of study: ${values.fieldOfStudy} at ${values.mySchool}, ` +
          `Type of application: ${values.typeOfApplication},` +
          `description: ${values.description}, ` +
          `Attending dinner: ${values.attendDinner}, ` +
          `Allergies: ${values.allergies ? values.allergies : "none"},`
          try {
        const response  = await fetch(
          "https://us-central1-kabis-bergen.cloudfunctions.net/kabisNewsletter",
          {
            method: "POST",
            body: JSON.stringify({email: values.myEmail, name: values.myName, body: msg}),
            headers: {
              "Content-Type": "application/json",
            },
         
          }
        )
        const json = await response.json();
        console.log('Success:', JSON.stringify(json));

          } catch (error) {
            console.error('Error:', error);
          }

        /*

        if(values.subscribe){
           body: `{\"to\":\"${values.myEmail}\",\"from\":\"info@kabis.no\",\"subject\":\"New Application from ${values.myName}\",\"body\":\"${msg}\"}`,
        }
   

        const emailBody =
          `name: ${values.myName}, ` +
          `Email: ${values.myEmail}, ` +
          `School and field of study: ${values.fieldOfStudy} at ${values.mySchool}, ` +
          `Type of application: ${values.typeOfApplication},` +
          `description: ${values.description}, ` +
          `Attending dinner: ${values.attendDinner}, ` +
          `Allergies: ${values.allergies ? values.allergies : "none"},`;


        window.location.href = `mailto:info@kabis.no?subject=New Application from ${values.myName} &body=${emailBody}`*/
        //resetForm()*/
  
      }}
    >
      {({ values, touched, errors, handleChange, handleBlur, isValid }) => (
        <Form noValidate autoComplete="off" className={classes.root}>
          <Box mx={1}>
            <Divider style={{ marginBottom: 20 }} />
            <TextField
              name="myName"
              helperText={touched.myName ? errors.myName : ""}
              error={Boolean(errors.myName)}
              label="My Name"
              margin="dense"
              required
              variant="outlined"
              value={values.myName}
              onBlur={handleBlur}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="myEmail"
              type="email"
              margin="dense"
              required
              helperText={touched.myEmail ? errors.myEmail : ""}
              error={Boolean(errors.myEmail)}
              label="My Email"
              variant="outlined"
              value={values.myEmail}
              onBlur={handleBlur}
              onChange={handleChange}
              fullWidth
            />
            <Grid container>
              <Grid item xs={12} sm={8}>
                <TextField
                  name="fieldOfStudy"
                  helperText={touched.fieldOfStudy ? errors.fieldOfStudy : ""}
                  error={Boolean(errors.fieldOfStudy)}
                  label="Field of Study"
                  margin="dense"
                  required
                  variant="outlined"
                  value={values.fieldOfStudy}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box ml={1}>
                  <TextField
                    id="select-school"
                    select
                    fullwidth
                    required
                    margin="dense"
                    label="My school"
                    className={classes.textField}
                    value={values.mySchool}
                    name="mySchool"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu,
                      },
                    }}
                    error={Boolean(errors.mySchool)}
                    helperText={touched.mySchool ? errors.mySchool : ""}
                  >
                    {school.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </Grid>
            </Grid>

            <Divider style={{ marginTop: 20, marginBottom: 20 }} />
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Type of application</FormLabel>
              <RadioGroup
                row
                aria-label="type-of-application"
                name="typeOfApplication"
                value={values.typeOfApplication}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Bachelor-/master- or project assignment"
                  control={<Radio color="primary" />}
                  label="Bachelor-/master- or project assignment"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="Business Idea"
                  control={<Radio color="primary" />}
                  label="Business Idea"
                  labelPlacement="start"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              margin="dense"
              label="Description"
              required
              name="description"
              helperText={
                touched.description
                  ? errors.description
                  : "Give a short summary of the project. include problem statmenet, mehotds and (if applicable) preliminary results. If you are applying with a business idea, please describe the problem, how you will solve it and how far along you are."
              }
              error={Boolean(errors.description)}
              type="text"
              onChange={handleChange}
              value={values.description}
              fullWidth
              variant="outlined"
              multiline
              onBlur={handleBlur}
              rows="4"
            />
            <Divider style={{ marginTop: 20, marginBottom: 20 }} />
            <Grid container>
              <Grid item xs={12} sm={6}>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">
                    I would like to attend the free dinner
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-label="attend-dinner"
                    name="attendDinner"
                    value={values.attendDinner}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio color="primary" />}
                      label="Yes"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio color="primary" />}
                      label="No"
                      labelPlacement="start"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="allergies"
                  helperText={touched.allergies ? errors.allergies : ""}
                  error={Boolean(errors.allergies)}
                  label="Food allergies"
                  margin="dense"
                  variant="outlined"
                  value={values.allergies}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
          <Box align="right" mt={4} mb={12}>
            <FoundryButton
              className={classes.button}
              type="submit"
              disabled={Boolean(!isValid)}
              color="primary"
              variant="contained"
              size="lg"
            >
              Apply now
            </FoundryButton>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

export default MyForm
