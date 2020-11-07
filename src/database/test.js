const Database = require("./db");
const saveDayCareCenter = require("./saveDayCareCenter");

Database.then(async (db) => {
  // inserir dados na tabela
  await saveDayCareCenter(db, {
    lat: "-12.7057438",
    lng: "-38.2989238",
    name: "Carmem Mirim 3",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social. ",
    whatsapp: "71991829193",
    images: [
      "http://127.0.0.1:5500/images/Frente_Carmem_Mirim.jpg",

      "http://127.0.0.1:5500/images/Frente_Carmem_Mirim.jpg",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visistas Das 18h até 8h",
    open_on_weekends: "0",
  });
  // consultar dados da tabela
  const selectedDayCareCenters = await db.all("SELECT * FROM dayCareCenters");
  console.log(selectedDayCareCenters);

  //  consultar 1 creche, pelo id
  const dayCareCenter = await db.all(
    'SELECT * FROM dayCareCenters WHERE id = "2"'
  );
  console.log(dayCareCenter);

  // deletar dado da tabela
  // console.log (await db.run("DELETE FROM dayCareCenter WHERE id = '4' "))
});
