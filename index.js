const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", async (req, res) => {
  res.send("server is running");
});

const uri =
  "mongodb+srv://yourtask:BHq5XSnvnTdcfqV7@cluster0.b0rbg8o.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const run = async () => {
  try {
    const taskCollection = client.db("yourTask").collection("task");
  } finally {
  }
};
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
run().catch((err) => console.log(err));
app.listen(port, () => {
  console.log(`This app is running in ${port}`);
});
