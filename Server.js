const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const routes = require("./route/TodoRoute");

const app = express();
app.use(express.json());

//Port

//use cors

app.use(cors());

///

const TodoItemRoute = require("./route/TodoRoute");
//MONGODB
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@todo.bsz8mg8.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => app.listen(process.env.PORT || 5500))
  .catch((err) => console.log(err));

app.use("/", TodoItemRoute);

///Add port and connect to server
app.listen(PORT, () => console.log("server connected"));
