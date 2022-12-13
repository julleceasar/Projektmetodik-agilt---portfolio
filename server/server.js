
import express from "express"
import mongoose from "mongoose"
import userRouter from "./routers/user.js"
import * as dotenv from "dotenv"

const app = express();


mongoose.set('strictQuery', true)


mongoose.connect(dotenv.config().parsed.DB_CONNECTION, {useNewUrlParser: true});
const db = mongoose.connection.getClient("Portfolio")


db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database") )


// middelwares
app.use(express.json());

// routes 
app.use("/user", userRouter)

//connecting client with server ( ish )
app.use("/", express.static("../client")); 

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

