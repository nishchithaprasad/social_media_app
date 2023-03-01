const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

const port = 8800;

dotenv.config();

require("./database/database.js").connect();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.listen(port, () => {
    console.log("Backend is running on", port);
});