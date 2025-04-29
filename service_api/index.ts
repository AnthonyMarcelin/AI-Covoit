import express from "express";
import userRouter from "./app/routers/users";
import debug from "debug";

const log = debug("app:service_api");
const app = express();
app.use(express.json());

app.use(userRouter);

app.listen(3000, () => {
  log("Authentification service is running on port 3000");
});