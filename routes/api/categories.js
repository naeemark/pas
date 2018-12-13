const express = require("express");
const router = express.Router();

// Category Model
const Category = require("../../models/Category");

// global controller for default header
router.get("/*", function(req, res, next) {
  res.header("Content-Range", "10");
  next();
});

// @route GET api/categories
// @desc Gets all categories
// @access Public
router.get("/", (req, res) => {
  Category.find()
    .sort({ name: 1 })
    .then(categories => res.json(categories));
});

// @route GET api/categories/:id
// @desc Gets Category by Id
// @access Public
router.get("/:id", async (req, res) => {
  Category.findById(req.params.id)
    .then(category => res.json(category))
    .catch(err => res.status(404).json({ success: false }));
});

// @route POST api/categories
// @desc Creates new Category
// @access Public
router.post("/", (req, res) => {
  const category = new Category({
    name: req.body.name
  });
  category.save(err => {
    if (err) {
      res.status(404).json(err);
      return;
    }
    res.json(category);
  });
});

// @route UPDATE api/categories/:id
// @desc Updates a Category
// @access Public
router.put("/:id", (req, res) => {
  Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, useFindAndModify: false },
    (err, category) => {
      err ? res.status(404).json({ success: false }) : res.json(category);
    }
  );
});

// @route DELETE api/categories/:id
// @desc Deletes a Category
// @access Public
router.delete("/:id", (req, res) => {
  Category.findById(req.params.id)
    .then(category =>
      category
        .remove()
        .then(() => res.json({ id: req.params.id, success: true }))
    )
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
