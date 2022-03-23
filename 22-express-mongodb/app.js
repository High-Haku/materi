const express = require('express');
const { MongoClient } = require("mongodb")

const app = express()
const PORT = process.env.PORT || 3000

// configurasi ke mongodb
const url = 'mongodb://localhost:27018'
const client = new MongoClient(url);
const dbName = 'bootcamp'

// menghubungkan server ke mongodb
client.connect()
.then(() => console.log("berhasil konek ke mongodb"))
.catch(err => console.log('gagal konek ke mongodb'))

// menghubungkan ke db dan menyiapkan collection
const db = client.db(dbName)
const User = db.collection('user')

app.use(express.json())

app.get("/", (req, res) => {
  res.json("ini dari expres yg konek yg mongodb")
})

// input data user
app.post("/user", async (req, res) => {
  const data = req.body

  await User.insertOne(data)
  res.json({
    message: "berhasil input data",
    data: 1
  })
})

// ambil semua data user
app.get("/user", async (req, res) => {
  const users = await User.find().toArray();

  res.json({
    message:"berhasil ambil data user",
    data: users
  })
})

// ambil data user by ID



app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})