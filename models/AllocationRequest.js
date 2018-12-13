const mongoose = require("mongoose");
const toJson = require("meanie-mongoose-to-json");
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
  matrikelNumber: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true }
});

// Create AllocationRequestSchema
const AllocationRequestSchema = new Schema({
  projects: [
    {
      project: {
        type: Schema.Types.ObjectId,
        ref: "project"
      },
      order: {
        type: Number,
        required: true,
        min: 1,
        max: 3
      }
    }
  ],
  team: [
    {
      matrikelNumber: { type: String, required: true },
      name: { type: String, required: true },
      email: { type: String, required: true }
    }
  ],
  comments: [String],
  status: {
    type: String,
    required: true,
    enum: ["draft", "submitted", "approved", "rejected"]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

AllocationRequestSchema.path("projects")
  .validate(
    projects => validateObject(projects, 3),
    "Allocation Request needs to have 3 projects!"
  )
  .validate(
    projects => validateDuplication(projects, "order"),
    "Multiple Projects can not have same order!"
  );

AllocationRequestSchema.path("team")
  .validate(
    team => validateObject(team, 3),
    "Allocation Request needs to have 3 Team members!"
  )
  .validate(
    team => validateDuplication(team, "matrikelNumber"),
    "Error! Duplicate matrikelNumber"
  );

function validateObject(object, requiredLength) {
  if (!object) {
    return false;
  } else if (object.length !== requiredLength) {
    return false;
  }
  return true;
}

function validateDuplication(object, attrib) {
  array = [object[0][attrib], object[1][attrib], object[2][attrib]];
  if (new Set(array).size !== array.length) {
    return false;
  }
  return true;
}

// Apply meanie plugin to change the attributes
AllocationRequestSchema.plugin(toJson);
CandidateSchema.plugin(toJson);

// Exports
module.exports = Project = mongoose.model(
  "allocationRequest",
  AllocationRequestSchema
);
