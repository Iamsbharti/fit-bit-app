const connectDb = require("./connect-db.js");

module.exports = async function createExerciseRoute(app) {
  app.post("/createExercise", async (req, res) => {
    //connect db
    let db = await connectDb();
    //get request body
    let exercise = req.body;
    console.log("create route");

    //add the exercise
    await db.collection("exercises").insertOne(exercise, (error, result) => {
      const title = result.ops[0].title;
      console.log(title);
      error
        ? res.status(500).send(error)
        : res.status(200).send(`${title} created`);
    });
  });
};
