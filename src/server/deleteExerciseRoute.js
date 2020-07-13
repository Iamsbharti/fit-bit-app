const connectDb = require("./connect-db.js");
const getExerciseById = require("./getExerciseById.js");
module.exports = async function deleteExerciseRoute(app) {
  app.delete("/deleteExercise", async (req, res) => {
    //init db
    let db = await connectDb();

    //get id from body
    let exerciseId = req.body.id;
    console.log(`${exerciseId} to be deleted`);
    //get exercise
    let _title = "";
    getExerciseById(exerciseId, (result) => {
      console.log("result", result);
      _title = result.length > 0 ? result[0].title : "";
      deleteExercise(_title, exerciseId, result.length);
    });

    //delete
    async function deleteExercise(title, id, len) {
      return len > 0
        ? await db
            .collection("exercises")
            .deleteOne({ id: exerciseId }, (error, result) => {
              error
                ? res.status(500).send(error)
                : res.status(200).send(`${_title} Deleted`);
            })
        : res.status(404).send("Exercise Not Found");
    }
  });
};
