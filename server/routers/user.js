import express from "express";
import User from "../model/User.js"


const router = express.Router()

// ...
router.post("/newUser", async (req, res) => { 
    try {

      await user.save();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
});

// ...
router.get("/getAll", async (req, res) => {
    
  
    try {

      const user = await User.find()
     
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  });

// ...
router.get("/getSkills/css", async (req, res) => {
    
  
  try {

    const user = await User.find().sort( { css: -1 } )
    
    if(user[0].css){

      res.json(user);
    }else{
      res.json("Det finns tyvärr ingen som är ledig just nu..")
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// ...
router.get("/getSkills/html", async (req, res) => {
    
  
  try {

    const user = await User.find().sort( { html: -1 } )
    if(user[0].html){

      res.json(user);
    }else{
      res.json("Det finns tyvärr ingen som är ledig just nu..")
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// ...
router.get("/getSkills/js", async (req, res) => {
    
  
  try {

    const user = await User.find().sort( { javaScript: -1 } )
    if(user[0].javaScript){

      res.json(user);
    }else{
      res.json("Det finns tyvärr ingen som är ledig just nu..")
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
// ...
router.get("/getSkills/php", async (req, res) => {
    
  
  try {

    const user = await User.find().sort( { php: -1 } )
    if(user[0].php){

      res.json(user);
    }else{
      res.json("Det finns tyvärr ingen som är ledig just nu..")
    }
  } catch (error) {
    res.status(500).json(error);
  }
});


router.get("/getSlug/:value", async (req, res) => {
    
  
    try {
    
      const user = await User.find({slug: req.params.value})
     
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
export default router