const app = require("./app");
const database = require("./database");
const config = require("./config");
database()
  .then((info) => {
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    app.listen(config.PORT, () => {
      console.log("Server has been started!");
    });
  })
  .catch((err) => {
    console.log(`Error ---> ${err}`);
    process.exit(1);
  });
