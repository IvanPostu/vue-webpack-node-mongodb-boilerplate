const express = require("express");
const { User } = require("./datasource/models");
const { connectToMongoDB } = require("./datasource/connector");
const router = require("./routes/createRouter.js")();

const app = express();
// app.use(express.urlencoded({ extended: true }));
app.use(
  express.json({
    inflate: true,
    limit: "100kb",
    reviver: null,
    strict: true,
    type: "application/json",
    verify: undefined,
  })
);

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
