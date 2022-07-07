const express = require ('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

//Middleware
app.use(express.json());
app.use("/api", userRoutes);

// Routes
app.get("/", (req, res) => {
    res.send("Welcome");
})

//MongoDB config
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log("Connected to Mongo database"))
    .catch((error)=>console.log(error));



app.listen(port, () => console.log('Server listening on port', port));