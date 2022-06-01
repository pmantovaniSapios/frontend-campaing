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
      // for (let index = 0; index < csvData.length; index++) {
      //     conn.query(`INSERT INTO datacampaings SET
      //                 campaingsId=1,
      //                 nome="${csvData[index].nome}",
      //                 phone="${csvData[index].phone}",
      //                 field01="${csvData[index].field01}",
      //                 field02="${csvData[index].field02}",
      //                 field03="${csvData[index].field03}",
      //                 field04="${csvData[index].field04}",
      //                 field05="${csvData[index].field05}",
      //                 field06="${csvData[index].field06}",
      //                 field07="${csvData[index].field07}",
      //                 field08="${csvData[index].field08}",
      //                 field09="${csvData[index].field09}",
      //                 field10="${csvData[index].field10}",
      //                 field11="${csvData[index].field11}",
      //                 field12="${csvData[index].field12}",
      //                 field13="${csvData[index].field13}",
      //                 field14="${csvData[index].field14}",
      //                 field15="${csvData[index].field15}",
      //                 field16="${csvData[index].field16}",
      //                 field17="${csvData[index].field17}",
      //                 field18="${csvData[index].field18}",
      //                 field19="${csvData[index].field19}",
      //                 field20="${csvData[index].field20}"
      //                     ON DUPLICATE KEY UPDATE
      //                         nome="${csvData[index].nome}",
      //                         phone="${csvData[index].phone}",
      //                         field01="${csvData[index].field01}",
      //                         field02="${csvData[index].field02}",
      //                         field03="${csvData[index].field03}",
      //                         field04="${csvData[index].field04}",
      //                         field05="${csvData[index].field05}",
      //                         field06="${csvData[index].field06}",
      //                         field07="${csvData[index].field07}",
      //                         field08="${csvData[index].field08}",
      //                         field09="${csvData[index].field09}",
      //                         field10="${csvData[index].field10}",
      //                         field11="${csvData[index].field11}",
      //                         field12="${csvData[index].field12}",
      //                         field13="${csvData[index].field13}",
      //                         field14="${csvData[index].field14}",
      //                         field15="${csvData[index].field15}",
      //                         field16="${csvData[index].field16}",
      //                         field17="${csvData[index].field17}",
      //                         field18="${csvData[index].field18}",
      //                         field19="${csvData[index].field19}",
      //                         field20="${csvData[index].field20}"

      console.log("end");

      axios({
        url: "https://697c-2804-14c-1ad-253f-a1ea-2a7d-8bbf-3878.sa.ngrok.io/datafromcsv",
        method: "post",
        data: csvData,
      })
        .then(function (response) {
          // your action after success
          console.log(response);
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
