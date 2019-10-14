const sgMail = require("@sendgrid/mail")

export default async function(req, res) {
  const {
    myName,
    mySchool,
    fieldOfStudy,
    myEmail,
    typeOfApplication,
    description,
    attendDinner,
    allergies,
    subscribe,
  } = JSON.parse(req.body)

  sgMail.setApiKey(process.env.sendgrid_api_key)

  const content = {
    to: myEmail,
    from: "info@kabis.no",
    templateId: "d-f43daeeaef504760851f727007e0b5d0",
    dynamic_template_data: {
      name: myName,
      email: myEmail,
      studentType: `${fieldOfStudy} at ${mySchool}`,
      typeOfApplication: typeOfApplication,
      description: description,
      dinner: attendDinner
        ? "I will attend the dinner"
        : "I will not attend the dinner",
      allergies: allergies ? allergies : "none",
    },
  }

  try {
    await sgMail.send(content)
    res
      .status(200)
      .send({ type: "success", message: "thank you for your application" })
  } catch (error) {
    console.log("ERROR", error)
    res.status(400).send({ type: "error", message: "there was an error" })
  }
}
