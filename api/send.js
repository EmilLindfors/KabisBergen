const sgMail = require("@sendgrid/mail")

export default async function(req, res) {
  console.log(req.body)
  const body = JSON.parse(req.body)

  sgMail.setApiKey(process.env.sendgrid_api_key)

  const content = {
    to: body.myEmail,
    from: "info@kabis.no",
    templateId: "d-4482ef8298a3475b8a464757f6deb53d",
    dynamic_template_data: {
      name: body.myName,
      email: body.myEmail,
      studentType: `${body.fieldOfStudy} at ${body.mySchool}`,
      typeOfApplication: body.typeOfApplication,
      description: body.description,
      dinner: body.attendDinner
        ? "I will attend the dinner"
        : "I will not attend the dinner",
      allergies: body.allergies ? body.allergies : "none",
    },
  }

  try {
    await sgMail.send(content)
    res
      .status(200)
      .send({ type: "success", message: "thank you for your application" })
  } catch (error) {
    console.log("ERROR", error)
    res.status(400).send({ type: "error", message: error})
  }
}
