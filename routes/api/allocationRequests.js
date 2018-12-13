const express = require("express");
const router = express.Router();

// AllocationRequest Model
const AllocationRequest = require("../../models/AllocationRequest");

// global controller for default header
router.get("/*", function(req, res, next) {
  res.header("Content-Range", "");
  next();
});

// @route GET api/allocationRequests
// @desc Gets all AllocationRequests from DB
// @access Public
router.get("/", (req, res) => {
  AllocationRequest.find()
    .populate("projects.project")
    .sort({ name: 1 })
    .then(projects => res.json(projects))
    .catch(err => res.status(404).json({ success: false }));
});

// @route GET api/allocationRequests/:id
// @desc Gets AllocationRequest by Id
// @access Public
router.get("/:id", async (req, res) => {
  AllocationRequest.findById(req.params.id)
    .populate("projects.project")
    .then(allocReq => res.json(allocReq))
    .catch(err => res.status(404).json({ success: false }));
});

// @route POST api/allocationRequests
// @desc Creates new AllocationRequest
// @access Public
router.post("/", (req, res) => {
  const project = new AllocationRequest({
    projects: req.body.projects,
    team: req.body.team,
    status: req.body.status,
    comments: req.body.comments
  });
  project.save(err => {
    if (err) {
      res.status(404).json(err);
      return;
    }
    res.json(project);
  });
});

// @route UPDATE api/allocationRequests/:id
// @desc Updates an AllocationRequest
// @access Public
router.put("/:id", (req, res) => {
  AllocationRequest.findById(req.params.id)
    .then(allocReq =>
      allocReq
        .update(req.body)
        .then(() => res.json({ id: req.params.id, success: true }))
    )
    .catch(err => res.status(404).json({ success: false }));
});

// @route DELETE api/allocationRequests/:id
// @desc Deletes an Allocation Request
// @access Public
router.delete("/:id", (req, res) => {
  AllocationRequest.findById(req.params.id)
    .then(allocReq =>
      allocReq
        .remove()
        .then(() => res.json({ id: req.params.id, success: true }))
    )
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
