const connectDb = require("./connect-db.js");
module.exports = async function getMusclesRoute(app) {
  app.get("/getMuscles", async (req, res) => {
    //initialize db
    let db = await connectDb();
    //get muscles collection
    console.info("get muscles route");
    await db
      .collection("muscles")
      .find()
      .toArray((error, result) => {
        error ? res.status(500).send(error) : res.status(200).send(result);
      });
  });
};
