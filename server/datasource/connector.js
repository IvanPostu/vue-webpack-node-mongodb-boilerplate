const mongoose = require("mongoose");

function connectToMongoDB() {
  return new Promise((resolve, reject) => {
    const mongoURI = "mongodb://127.0.0.1:27017/appDB";

    const options = {
      user: "appUser",
      pass: "q12345",
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    mongoose.connect(mongoURI, options);

    mongoose.connection.on("connected", () => {
      console.log("Mongoose default connection open to " + mongoURI);
      resolve();
    });

    // If the connection throws an error
    mongoose.connection.on("error", (err) => {
      console.error("Handle mongo errored connections");
      reject(err);
    });

    // When the connection is disconnected
    mongoose.connection.on("disconnected", () => {
      console.log("Mongoose default connection disconnected");
    });

    process.on("SIGINT", () => {
      mongoose.connection.close(() => {
        console.log("App terminated, closing mongo connections");
        process.exit(0);
      });
    });
  });
}

module.exports = { connectToMongoDB };
