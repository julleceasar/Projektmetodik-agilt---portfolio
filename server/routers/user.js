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


  
export default router