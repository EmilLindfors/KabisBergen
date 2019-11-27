import { sleep } from "../utils"

export const createEmail = ({lines, toEmail, fromEmail, name, subject}) => ({
        email: toEmail,
        name: name,
        fromEmail: fromEmail,
        subject: subject,
        content: lines,
      });


export async function submit({email, setSubmitting, setStatus, navigate, resetForm}){
   
  const res = await fetch(
    "https://us-central1-kabis-bergen.cloudfunctions.net/kabisTransactional",
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    }
  )
  console.log(res)

  setSubmitting(false)
  resetForm()
  setStatus("Message Sent, thank you!")
  sleep(1000).then(() => {
    navigate("/")
  })
}