const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const toJson = require("meanie-mongoose-to-json");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

// Apply meanie plugin to change the attributes
CategorySchema.plugin(toJson);

// Apply the uniqueValidator plugin to CategorySchema
CategorySchema.plugin(uniqueValidator, { type: "mongoose-unique-validator" });

// Exports
module.exports = Category = mongoose.model("category", CategorySchema);
