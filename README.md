TODO 

Transactional emails via cloud functions 
https://cloud.google.com/functions/docs/tutorials/sendgrid

func() {
sendgrid to user
store in google-spreadsheet
email to info@kabis.no
}

enable google sheets api in cloud console
create a service account


Need to have a .env.development and also .env.production to test the prod. 

Sheets, the titles need to be the same as the worksheet title in the drive

## How to get the data from google sheets into gatsby

1. Create a google form in drive
2. Export the answers to a google sheet
3. add the google service account as an editor to the sheet
4. copy the ID of the sheet as well as the name of the worksheet (you may modify this)
5. Add the sheet to gatsby-node as a "createNodesfromSheet"