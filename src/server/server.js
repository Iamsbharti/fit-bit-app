const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const getMusclesRoute = require("./getMusclesRoute.js");
const exercisesRoute = require("./exercisesRoute.js");
const createExerciseRoute = require("./createExerciseRoute.js");
const deleteExerciseRoute = require("./deleteExerciseRoute.js");
const updateExerciseRoute = require("./updateExerciseRoute.js");
const connectDb = require("./connect-db.js");
const initializedb = require("./initialize-db");
//initialize a port
let port = process.env.PORT || "4200";

//initialize the express app dd
let app = express();

//listen to requests
app.listen(
  port,
  console.log(`API Server Started at -${port},${process.env.NODE_ENV}`)
);

//set body parser (url encoded) and cors
app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

//test api path
/*app.get("/", async (req, res) => {
  console.log(req.body);
  res.send("Get works");
});*/
//connect and init db
connectDb().then(initializedb);

//get muscles route
getMusclesRoute(app);

//get exercises route
exercisesRoute(app);

//create exercise route
createExerciseRoute(app);

//delete exercise route
deleteExerciseRoute(app);

//update exercise route
updateExerciseRoute(app);

//production config--fixed
if (process.env.NODE_ENV === "production") {
  console.log("prod");
  app.use(express.static(path.resolve(__dirname, "../../dist")));
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve("index.html"));
  });
}
