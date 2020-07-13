const MongoClient = require("mongodb");
let URL = process.env.MONGODB_URI || "mongodb://localhost:27017/exercise";
let db = null;
module.exports = async function connectDb() {
  if (db) return db;

  let client = await MongoClient.connect(
    URL,
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  );
  db = client.db();
  console.info("Database connected");

  return db;
};

//connectDb();
