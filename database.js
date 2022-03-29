const config = require("./config");
const mongoose = require("mongoose");

module.exports = () => {
  return new Promise((resolve, reject) => {
    mongoose.Promise = global.Promise; //set global Promise library, becouse there is some problem with internal Promise.
    mongoose.set("debug", true);
    mongoose.connection
      .on("error", (error) => reject(error))
      .on("close", () => console.log("Database connection closed."))
      .once("open", () => resolve(mongoose.connection));
   console.log(config.MONGO_URL)
    mongoose.connect(config.MONGO_URL);
  });
};
