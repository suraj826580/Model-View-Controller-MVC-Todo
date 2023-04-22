const { Router } = require("express");

const { UserModel } = require("../models/userModel");
const userRoute = Router();

userRoute.get("/", async (req, res) => {
  const Data = await UserModel.find();
  res.send(Data);
});
userRoute.post("/", async (req, res) => {
  const user = new UserModel(req.body);
  await user.save();
  res.send("User Saved.");
});

userRoute.patch("/:id", async (req, res) => {
  const { id } = req.params;
  await UserModel.findByIdAndUpdate({ _id: id }, req.body);
  const user = await UserModel.find({ _id: id });
  res.send(`${user}\nUpdated`);
});
userRoute.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await UserModel.findByIdAndDelete({ _id: id });
  res.send("Deleted");
});
module.exports = { userRoute };
