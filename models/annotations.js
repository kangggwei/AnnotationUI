const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const annotationSchema = new Schema({
  filename: { type: String, required: true },
  status: { type: String, required: true },
});

const Annotations = mongoose.model("Annotations", annotationSchema);

module.exports = Annotations;
