const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");

//Create user
router.post("/users", (req, res) => {
  const user = userSchema(req.body);

  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//List users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//List user by id
router.get("/users/:id", (req, res) => {
  const { id } = req.params;

  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Update user
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;

  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Delete user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router;
