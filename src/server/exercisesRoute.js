const connectDb = require("./connect-db.js");
module.exports = async function exercisesRoute(app) {
  app.get("/getExercises", async (req, res) => {
    console.log("getExercises");
    //intiliaze db
    let db = await connectDb();
    //get exercises collection
    console.log("Get Exercise Route");
    //let exercises = await db.collection("exercises").find().toArray();
    await db
      .collection("exercises")
      .find()
      .toArray((error, result) => {
        error ? res.status(500).send(error) : res.status(200).send(result);
      });
  });
};
