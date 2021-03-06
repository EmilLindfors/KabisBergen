const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.sendgrid_api_key)
console.log(req.body)
  const { myEmail, myName } = req.body

  const content = {
    to: 'emil@lindforsfoundry.com',
    from: myEmail,
    subject: `New Message From - ${myEmail}`,
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