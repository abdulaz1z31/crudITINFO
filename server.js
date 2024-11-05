import express from "express";
import dotenv from "dotenv";
import {mongoose, connect} from "mongoose";
import {
  authRouter,
  cartegoryRouter,
  authorRouter,
} from "./src/routes/index.routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT;
const db_url = process.env.MONGO_URI;

app.use(express.json());

app.use("/", authRouter);
app.use("/author", authorRouter);
app.use("/cartegory", cartegoryRouter);

try {
  connect(db_url);
  mongoose.connection.on("connected", () => console.log("connected"));
} catch (error) {
  mongoose.connection.on("error", (err) => {
    console.error(err);
  });
}

app.listen(port, async () => {
  console.log(`server is running on ${port} port`);
});
