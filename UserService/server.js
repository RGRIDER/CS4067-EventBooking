const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const { createUserTable } = require("./models/userModel");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

(async () => {
  await createUserTable();
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})();

app.use("/api", userRoutes);
