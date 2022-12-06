import express from "express";
import User from "../model/user.js"


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
    console.log("hhelloo mtf")
  
    try {

      const user = await User.find()

      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  });


  
export default router