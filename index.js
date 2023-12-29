const { parse } = require("csv-parse");
const fs = require("fs");
// read email.csv file
const csvFilePath = "./email.csv";

const emails = fs.createReadStream(csvFilePath).pipe(parse());

emails
  .on("data", (dataRow) => {
    console.log(dataRow[0]);
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
  });
