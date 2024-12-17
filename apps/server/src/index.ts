import express from "express";
import morgan from "morgan";
import cors from "cors";

const PORT = 8080;

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.listen(PORT, () =>
  console.log("Server running and listening on https://locahost:8080")
);
