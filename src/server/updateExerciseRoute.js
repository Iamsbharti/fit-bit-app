const connectDb = require("./connect-db.js");

module.exports = function updateExerciseRoute(app) {
  app.put("/editExercise", async (req, res) => {
    //get db
    let db = await connectDb();
    //get collection
    let collection = db.collection("exercises");
    //get body
    let { id, title, muscles, description } = req.body;
    //console.log("updating", id, title, muscles, description);
    console.log("Update Route");
    await collection.updateOne(
      { id },
      {
        $set: {
          id,
          title,
          muscles,
          description,
        },
      },
      function (err, r) {
        err
          ? res.status(500).send(`${err}`)
          : res.status(200).send(`${r.modifiedCount} row updated`);
      }
    );
  });
};
