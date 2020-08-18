const express = require("express");
const router = express.Router();
const Annotations = require("../models/annotations");

// request: GET all articles
router.get("/", (req, res) => {
  Annotations.find()
    .then((annotation) => res.json(annotation))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// request: POST new article
router.post("/add", (req, res) => {
  const newAnnotation = new Annotations({
    filename: req.body.filename,
    status: req.body.status,
  });

  newAnnotation
    .save()
    .then(() => res.json("Annotation has been updated successfully."))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// request: FIND article by ID
router.get("/:id", (req, res) => {
  Annotations.findById(req.params.id)
    .then((annotation) => res.json(annotation))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// request: FIND article by ID and update
router.put("/update/:id", (req, res) => {
  Annotations.findById(req.params.id)
    .then((annotation) => {
      annotation.filename = req.body.filename;
      annotation.status = req.body.status;

      annotation
        .save()
        .then(() => res.json("Annotation has been updated successfully."))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// request: FIND article by ID and delete
router.delete("/:id", (req, res) => {
  Annotations.findByIdAndDelete(req.params.id)
    .then(() => res.json("Annotation has been deleted successfully."))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
module.exports = router;
