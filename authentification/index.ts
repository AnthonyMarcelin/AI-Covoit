import express from "express";
import router from "./app/routers";
import debug from "debug";

const log = debug("app:authentication");
const app = express();
app.use(express.json());

app.use(router);

app.listen(3000, () => {
  log("Authentication service is running on port 3000");
});