import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.static("public"));

const PORT = process.env.CLIENT_PORT || 8080;

app.listen(PORT, () => {
  console.log(`Client running on port ${PORT}`);
});
