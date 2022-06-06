const csv = require("@fast-csv/parse");
const fs = require("fs");
const { default: axios } = require("axios");

async function csvToJson(filepath) {
  let stream = fs.createReadStream(filepath);
  let csvData = [];
  let csvStream = csv
    .parse({ headers: true, ignoreEmpty: true })
    .transform((data) => ({
      id: data.id,
      nome: data.nome,
      phone: data.phone,
      field01: data.field01,
      field02: data.field02,
      field03: data.field03,
      field04: data.field04,
      field05: data.field05,
      field06: data.field06,
      field07: data.field07,
      field08: data.field08,
      field09: data.field09,
      field10: data.field10,
      field11: data.field11,
      field12: data.field12,
      field13: data.field13,
      field14: data.field14,
      field15: data.field15,
      field16: data.field16,
      field17: data.field17,
      field18: data.field18,
      field19: data.field19,
      field20: data.field20,
    }))
    .on("error", (error) => console.error(error))
    .on("data", async function (data) {
      csvData.push(data);
    })
    .on("end", async () => {
      axios({
        url: "https://connector.sapios.com.br/hap/datafromcsv",
        method: "post",
        data: csvData,
      })
        .then(function (response) {
          // your action after success
          // console.log(response);
        })
        .catch(function (error) {
          // your action on error success
          console.log(error);
        });

      fs.unlinkSync(filepath);
    });

  stream.pipe(csvStream);

  if (csvData.length === 0) {
    return false;
  } else {
    return true;
  }
}

module.exports = csvToJson;
