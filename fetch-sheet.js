exports.__esModule = true
const GoogleSpreadsheet = require("google-spreadsheet").GoogleSpreadsheet
const _ = require("lodash")

const getSpreadsheet = async (spreadsheetId, credentials) => {
  //removed surrounding promise
  const doc = new GoogleSpreadsheet(spreadsheetId)
  await doc.useServiceAccountAuth(credentials)
  return doc;
}

const getWorksheetByTitle = async (spreadsheet, worksheetTitle) => {
  //removed surrounding promise

  /*const worksheet = await spreadsheet.getInfo((s) => s.worksheets.find(
    sheet => sheet.title === worksheetTitle
  ))*/
  await spreadsheet.loadInfo();
  console.log("spreadsheet:", spreadsheet.title)
  
  // possible worksheet props: sheetsByIndex, sheetsById and sheetCount
  const worksheet = await spreadsheet.sheetsByIndex.find(sheet => sheet.title === worksheetTitle)
  console.log("found the worksheet: ", worksheet.title)

  return worksheet;

}
//removed promise
const getRows = async (worksheet, options = {}) => await worksheet.getRows(options)


//does not work
const cleanRows = rows =>
  rows.map(r =>
    _.chain(r)
      .omit(["_xml", "app:edited", "save", "del", "_links"])
      .mapKeys((v, k) => _.camelCase(k))
      .mapValues(val => {
        if (val === "") return null
        // sheets apparently leaves commas in some #s depending on formatting
        if (val.replace(/[,\.\d]/g, "").length === 0 && val !== "") {
          return Number(val.replace(/,/g, ""))
        }
        if (val === "TRUE") return true
        if (val === "FALSE") return false
        return val
      })
      .value()
  )

const fetchData = async (spreadsheetId, worksheetTitle, credentials) => {
  console.log("fetch called")
  const spreadsheet = await getSpreadsheet(spreadsheetId, credentials)
  const worksheet = await getWorksheetByTitle(spreadsheet, worksheetTitle)
  const rows = await worksheet.getRows()
  //let CellData = [];
  //await rows.map(row => CellData.push(row._rawData));


      //console.log("Cell Data: ",CellData)
  //return cleanRows(CellData)
  return rows
}

exports.cleanRows = cleanRows
exports.default = fetchData
