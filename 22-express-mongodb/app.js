const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const { UserModel } = require("./models/");
// const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 3000;

// configurasi ke mongodb local
// const url = 'mongodb://localhost:27018'
// const client = new MongoClient(url);
// const dbName = "bootcamp";

const uri =
  "mongodb+srv://skilvul:skilvul123@cluster0.wfybr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => console.log("berhasil konek ke mongoose"))
  .catch((err) => console.log("gagal konek ke mongo"));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("ini dari expres yg konek yg mongodb atlas dengan mongoose");
});

// ambil semua data user
app.get("/user", async (req, res) => {
  console.log(UserModel);
  const users = await UserModel.find({});
  console.log(users);

  try {
    res.json({
      message: "berhasil ambil data user",
      data: users,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// ambil data user by ID
// app.get("/user/:id", async (req, res) => {
//   const users = await User.findOne(req.params.id);
//   res.json({
//     message: "berhasil ambil data user",
//     data: users,
//   });
// });

// input data user
// app.post("/user", async (req, res) => {
//   const data = req.body;

//   await User.insertOne(data);
//   res.json({
//     message: "berhasil input data",
//     data: 1,
//   });
// });

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

// let db = mongoose.connection;
// menghubungkan server ke mongodb
// client
//   .connect()
//   .then(() => console.log("berhasil konek ke mongodb"))
//   .catch((err) => console.log("gagal konek ke mongodb"));

// menghubungkan ke db dan menyiapkan collection
// const db = client.db(dbName);
// const User = db.collection("users");
