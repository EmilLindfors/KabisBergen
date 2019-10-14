const sgMail = require('@sendgrid/mail')


export default async function(req, res) {

  const { myEmail, myName } = req.body

sgMail.setApiKey(process.env.sendgrid_api_key)

 const content = {
    to: myEmail,
    from: "info@kabis.no",
    subject: `Thank you for submitting - ${myName}`,
    text: myName,
    html: `<p>${myName}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}