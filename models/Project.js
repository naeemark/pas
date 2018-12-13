const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const toJson = require("meanie-mongoose-to-json");
const Schema = mongoose.Schema;

const TextSchema = new Schema({
  text: String
});

const LinkSchema = new Schema({
  name: String,
  link: String
});

// Create ProjectSchema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  category: { type: Schema.Types.ObjectId, ref: "category" },
  tasks: {
    type: [TextSchema],
    required: true
  },
  requiredSkills: {
    type: [TextSchema],
    required: true
  },
  relatedTechs: [LinkSchema],
  relatedProjects: [LinkSchema],
  relatedLinks: [LinkSchema],
  relatedRepos: [LinkSchema],
  date: {
    type: Date,
    default: Date.now
  }
});

// Apply meanie plugin to change the attributes
ProjectSchema.plugin(toJson);
TextSchema.plugin(toJson);
LinkSchema.plugin(toJson);

// Apply the uniqueValidator plugin to ProjectSchema.
ProjectSchema.plugin(uniqueValidator, { type: "mongoose-unique-validator" });

// Exports
module.exports = Project = mongoose.model("project", ProjectSchema);
