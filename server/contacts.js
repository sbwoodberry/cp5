const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

// Create a scheme for contacts in the directory.
const contactSchema = new mongoose.Schema({
  aptNumber: String,
  lastName: String,
  firstName: String,
  email: String,
});

// Create a model for contacts in the directory.
const Contact = mongoose.model('Contact', contactSchema);

// Create a new contact in the directory.
router.post('/', auth.verifyToken, async (req, res) => {
  const contact = new Contact({
    aptNumber: req.body.aptNumber,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    email: req.body.email,
  });
  try {
    await contact.save();
    res.send(contact);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the items in the museum.
router.get('/', async (req, res) => {
  try {
    let contacts = await Contact.find();
    res.send(contacts);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Contact.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = {
  model: Contact,
  routes: router,
}
