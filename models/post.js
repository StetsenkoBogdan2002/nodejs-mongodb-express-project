const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      default: "No Title",
    },
    body: {
      type: String,
    },
  },
  { timestamps: true }
);
schema.set("toJSON", { virtuals: true });
module.exports = mongoose.model("post", schema);
