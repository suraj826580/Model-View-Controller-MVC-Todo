const express = require("express");
const { connection } = require("./config/db");
const { userRoute } = require("./routes/user.route");

const app = express();

app.use(express.json());

app.use("/", userRoute);

app.listen(8080, async (req, res) => {
  await connection;
  console.log("Connected to the Database");
});
