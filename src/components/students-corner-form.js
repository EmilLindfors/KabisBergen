import React from "react"
import {
  Divider,
  Button,
  TextField,
  Box,
  MenuItem,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Grid
} from "@material-ui/core"
import {
  Title,
  Button as FoundryButton,
} from "gatsby-theme-material-foundry"
import { makeStyles } from "@material-ui/core/styles"
import Icon from "@material-ui/icons/Cancel"
import { FieldArray, Form, Formik, getIn } from "formik"
import * as Yup from "yup"


const validationSchema = Yup.object().shape({
  mittFakultet: Yup.string().required("Du må velge et fakultet"),
  mittNavn: Yup.string().required("Du må skrive et navn"),
  minEmail: Yup.string()
    .required("Du må skrive en epost")
    .email("må være en epost"),
  people: Yup.array().of(
    Yup.object().shape({
      navn: Yup.string().required("Du må skrive et navn"),
      email: Yup.string()
        .required("Du må skrive en epost")
        .email("må være en epost"),
    })
  ),
  ideTittel: Yup.string().required("Hva er tittelen på ideen?"),
  beskrivelse: Yup.string()
    .min(50, "Oppsummeringen må være minimum 50 bokstaver")
    .required("Oppsummeringen må være minimum 50 bokstaver"),
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
  textField:{
width: "100%",
  },
  button: {
    margin: theme.spacing(1),
  },
  field: {
    margin: theme.spacing(1),
  },
}))

const fakultet = [
  {
    value: "FIN",
    label: "FIN - Fakultet for ingeniør- og naturvitskap",
  },
  {
    value: "FHS",
    label: "FHS - Fakultet for helse- og sosialvitskap",
  },
  {
    value: "FLKI",
    label: "FLKI - Fakultet for lærarutdanning, kultur og idrett",
  },
  {
    value: "FØS",
    label: "FØS - Fakultet for økonomi og samfunnsvitskap",
  },
]

const campus = [
  {
    value: "Bergen",
    label: "Bergen",
  },
  {
    value: "Sogndal",
    label: "Sogndal",
  },
  {
    value: "Stord",
    label: "Stord",
  },
  {
    value: "Haugesund",
    label: "Haugesund",
  },
  {
    value: "Førde",
    label: "Førde",
  },
]

const MyForm = ({ handleClose }) => {
  const classes = useStyles()

  return (

      <Formik
        initialValues={{
          mittNavn: "",
          mittFakultet: "",
          mittCampus: "",
          minEmail: "",
          ideTittel: "",
          beskrivelse: "",
          people: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("onSubmit", JSON.stringify(values, null, 2))
          var emailBody = ""
          if (values.people.length > 0) {
            emailBody =
              `Navn: ${values.mittNavn}, ` +
              `Email: ${values.minEmail}, ` +
               `Campus og fakutet: ${values.mittFakultet} ved ${values.mittCampus}, ` +
              `Andre i teamet: ${values.people.map(
                person => `navn: ${person.navn} email: ${person.email}, `
              )},` +
              `Ide Tittel: ${values.ideTittel},` +
              `Beskrivelse: ${values.beskrivelse}`
          } else {
            emailBody =
              `Navn: ${values.mittNavn}, ` +
              `Email: ${values.minEmail}, ` +
              `Campus og fakutet: ${values.mittFakultet} ved ${values.mittCampus}, ` +
              `Ide Tittel: ${values.ideTittel}, ` +
              `Beskrivelse: ${values.beskrivelse}`
          }
          window.location.href = `mailto:studentinnovasjon@hvl.no?subject=Ny ide fra ${values.mittNavn} &body=${emailBody}`

          resetForm()
        }}
      >
        {({ values, touched, errors, handleChange, handleBlur, isValid }) => (
          <Form noValidate autoComplete="off" className={classes.root}>
            <Divider style={{ marginBottom: 20 }} />
  
            <TextField
              name="mittNavn"
              helperText={touched.mittNavn ? errors.mittNavn : ""}
              error={Boolean(errors.mittNavn)}
              label="Mitt Navn"
              margin="dense"
              required
              variant="outlined"
              value={values.mittNavn}
              onBlur={handleBlur}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="minEmail"
              type="email"
              margin="dense"
              required
              helperText={touched.minEmail ? errors.minEmail : ""}
              error={Boolean(errors.minEmail)}
              label="Min Email"
              variant="outlined"
              value={values.minEmail}
              onBlur={handleBlur}
              onChange={handleChange}
              fullWidth
            />
<Grid container>
  <Grid item xs={12} sm={8}>
            <TextField
              id="standard-select-campus"
              select
              required
              margin="dense"
              label="Mitt HVL Fakultet"
              className={classes.textField}
              value={values.mittFakultet}
              name="mittFakultet"
              variant="outlined"
              onBlur={handleBlur}
              fullwidth
              onChange={handleChange}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              error={Boolean(errors.mittFakultet)}
              helperText={touched.mittFakultet ? errors.mittFakultet : ""}
            >
              {fakultet.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box ml={1}>
            <TextField
              id="standard-select-faculty"
              select
              fullwidth
              required
              margin="dense"
              label="Mitt Campus"
              className={classes.textField}
              value={values.mittCampus}
              name="mittCampus"
              variant="outlined"
              onBlur={handleBlur}
              onChange={handleChange}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              error={Boolean(errors.mittCampus)}
              helperText={touched.mittCampus ? errors.mittCampus : ""}
            >
              {campus.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            </Box>
            </Grid>
            </Grid>
            <FieldArray name="people">
              {({ push, remove }) => (
                <div>
                  <Title black variant="h6">
                    Andre i teamet
                  </Title>
                  {values.people.map((p, index) => {
                    const navn = `people[${index}].navn`
                    const touchedNavn = getIn(touched, navn)
                    const errorNavn = getIn(errors, navn)

                    const email = `people[${index}].email`
                    const touchedEmail = getIn(touched, email)
                    const errorEmail = getIn(errors, email)

                    return (
                      <div key={p.id}>
                        <TextField
                          className={classes.field}
                          variant="outlined"
                          label="Navn"
                          margin="dense"
                          name={navn}
                     
                          value={p.navn}
                          required
                          helperText={touchedNavn && errorNavn ? errorNavn : ""}
                          error={Boolean(touchedNavn && errorNavn)}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <TextField
                          className={classes.field}
                          variant="outlined"
                          label="Email"
                          margin="dense"
                          type="email"
                          name={email}
                          value={p.email}
                          required
                          helperText={
                            touchedEmail && errorEmail ? errorEmail : ""
                          }
                          error={Boolean(touchedEmail && errorEmail)}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <FoundryButton
                          className={classes.button}
                          margin="normal"
                          type="button"
                          variant="outlined"
                          color="error"
                          simple
                          justIcon
                          onClick={() => remove(index)}
                        >
                          <Icon />
                        </FoundryButton>
                      </div>
                    )
                  })}
                  <Button
                    className={classes.button}
                    type="button"
                    variant="outlined"
                    onClick={() =>
                      push({ id: Math.random(), navn: "", email: "" })
                    }
                  >
                    Ny Person
                  </Button>
                </div>
              )}
            </FieldArray>
            <Divider style={{ marginTop: 20, marginBottom: 20 }} />
            <Title black variant="h5">
              Ide
            </Title>
            <TextField
              name="ideTittel"
              helperText={touched.ideTittel ? errors.ideTittel : ""}
              error={Boolean(errors.ideTittel)}
              label="ide-tittel"
              required
              variant="outlined"
              margin="dense"
              value={values.ideTittel}
              onChange={handleChange}
              fullWidth
              onBlur={handleBlur}
            />
            <TextField
              margin="dense"
              label="Oppsummering"
              required
              name="beskrivelse"
              helperText={touched.beskrivelse ? errors.beskrivelse : "Skriv en oppsummering av ideèn"}
              error={Boolean(errors.beskrivelse)}
              type="text"
              onChange={handleChange}
              value={values.beskrivelse}
              fullWidth
              variant="outlined"
              multiline
              onBlur={handleBlur}
              rows="4"
            />
            <Divider style={{ marginTop: 20, marginBottom: 20 }} />
            <Box align="right">
             
              <FoundryButton
                className={classes.button}
                type="submit"
                disabled={Boolean(!isValid)}
                color="primary"
                variant="contained"
                // disabled={!isValid || values.people.length === 0}
              >
                send inn bidrag
              </FoundryButton>
            </Box>
          </Form>
        )}
      </Formik>

  )
}

export default MyForm
