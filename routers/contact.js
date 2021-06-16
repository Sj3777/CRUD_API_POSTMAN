const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.post("/", async (req, res) => {
  const contacts = new Contact({
    Name: req.body.Name,
    Email: req.body.Email,
    Phone: req.body.Phone,
    Department: req.body.Department,
  });
  try {
    const con_save = await contacts.save();
    res.json(con_save);
    console.log(con_save);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.json(contact);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.patch("/:id",async(req,res)=>{
  try{
      const contact= await Contact.findById(req.params.id);
      contact.Name=req.body.Name;
      const a1= await contact.save();
      res.json(a1);
  }catch(err){
    res.send("Error"+err);
  }
})

module.exports = router;
