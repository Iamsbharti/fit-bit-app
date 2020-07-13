const connectDb = require("./connect-db.js");
module.exports = async function getExerciseById(id, callback) {
  //get db
  let db = await connectDb();
  console.log("finding", id);
  await db
    .collection("exercises")
    .find({ id: id })
    .toArray((error, result) => {
      console.log(result);
      error ? callback(error) : callback(result);
    });
};
