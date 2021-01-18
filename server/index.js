const express = require("express");
const bodyParser = require("body-parser");
const { User } = require("./datasource/models");
const { connectToMongoDB } = require("./datasource/connector");
const router = require("./routes/createRouter.js")();

const app = express();
app.use(bodyParser.json());
app.use("/api", router);

async function runApplication() {
  try {
    await connectToMongoDB();

    app.listen(8000, "127.0.0.1", () => {
      console.log("App running !!!");
    });
  } catch (error) {
    console.warn(err);
    process.exit(-1);
  }
}

runApplication();

// app.get("/users", async (req, res) => {
//   const users = await User.find();
//   res.send(users);
// });

// app.get("/users/:id", async (req, res) => {
//   const user = await User.findById(req.params.id);
//   res.send(user);
// });

// app.post("/users", async (req, res) => {
//   let user = new User(req.body);
//   user = await user.save();
//   res.send(user);
// });

// app.put("/users/:id", async (req, res) => {
//   const user = User.findByIdAndUpdate(req.params.id, { $set: req.body });
//   res.send(user);
// });

// app.delete("/users/:id", async (req, res) => {
//   const user = User.findByIdAndDelete(req.params.id);
//   res.send(user);
// });
