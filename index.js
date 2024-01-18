const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./Routes/Blog_Routes");
const submitform = require("./Routes/Registrationform_Routes");
const hrRoutes = require("./Routes/HR_Routes");
const userRoutes = require("./Routes/User_Routes");


app.use(cors());
app.use(express.json());
app.use("/Blog", router);
app.use("/FormData", submitform);
app.use("/HR", hrRoutes);
app.use("/User", userRoutes);

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test", {
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log('Database is not connected due to ', error);
  }
}

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

main().catch((err) => console.log(err));
