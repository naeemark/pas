const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const projects = require("./routes/api/projects");
const categories = require("./routes/api/categories");
const allocationRequests = require("./routes/api/allocationRequests");

// Instantiate Express
const app = express();

// BodyParse Middleware initialization
app.use(bodyParser.json());

// MongoDB Config
const db = require("./config/keys").mongoDbUri;

// Connect to MongoDb
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useCreateIndex: true }
  )
  .then(() => console.log("MongoDb Connected..."))
  .catch(err => console.log(err));

// Enable CORS
app.use(cors());

// Use Routes
app.use("/api/projects", projects);
app.use("/api/categories", categories);
app.use("/api/allocationRequests", allocationRequests);

// Set static assests path for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Server Port
const port = process.env.PORT || 5000;

// Starting server
app.listen(port, () => console.log(`Server started on port: ${port}`));
