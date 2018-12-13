const express = require("express");
const router = express.Router();

// Project Model
const Project = require("../../models/Project");

// global controller for default header
router.get("/*", function(req, res, next) {
  res.header("Content-Range", "");
  next();
});

// @route GET api/projects
// @desc Gets all projects from DB
// @access Public
router.get("/", (req, res) => {
  Project.find()
    .populate("category")
    .sort({ name: 1 })
    .then(projects => res.json(projects));
});

// @route GET api/projects/:id
// @desc Gets project by Id
// @access Public
router.get("/:id", async (req, res) => {
  // todo   Commented after testing
  // const p = await Project.findById(req.params.id).populate("category");
  // res.json(p);

  Project.findById(req.params.id)
    .populate("category")
    .then(project => res.json(project))
    .catch(err => res.status(404).json({ success: false }));
});

// @route GET api/projects/category/:category
// @desc Gets all projects by Category
// @access Public
router.get("/category/:id", (req, res) => {
  Project.find({ category: req.params.id })
    .populate("category")
    .sort({ name: 1 })
    .then(projects => res.json(projects));
});

// @route GET api/projects/categories
// @desc Gets all Categories
// @access Public
router.get("/categories", (req, res) => {
  Project.find()
    .distinct("category")
    .then(categories => res.json(categories));
});

// @route POST api/projects
// @desc Creates new Project
// @access Public
router.post("/", (req, res) => {
  const project = new Project({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    tasks: req.body.tasks,
    requiredSkills: req.body.requiredSkills,
    relatedTechs: req.body.relatedTechs,
    relatedProjects: req.body.relatedProjects,
    relatedLinks: req.body.relatedLinks,
    relatedRepo: req.body.relatedRepo
  });
  project.save(err => {
    if (err) {
      res.status(404).json(err);
      return;
    }
    res.json(project);
  });
});

// @route UPDATE api/project/:id
// @desc Updates a Project
// @access Public
router.put("/:id", (req, res) => {
  // Excludes Category Update
  if (req.body.category) {
    delete req.body.category;
  }

  Project.findById(req.params.id)
    .then(project =>
      project
        .update(req.body)
        .then(() => res.json({ id: req.params.id, success: true }))
    )
    .catch(err => res.status(404).json({ success: false }));
});

// @route DELETE api/projects/:id
// @desc Deletes a Project
// @access Public
router.delete("/:id", (req, res) => {
  Project.findById(req.params.id)
    .then(project =>
      project
        .remove()
        .then(() => res.json({ id: req.params.id, success: true }))
    )
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
