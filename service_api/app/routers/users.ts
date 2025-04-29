import { Router } from "express";
import userController from "../controllers/userController";

const userRouter = Router();

userRouter.get("/users", userController.getAllUsers);


// userRouter.get("/", userController.list);
// userRouter.get("/:email", userController.findByEmail);
// userRouter.post("/", userController.create);
// userRouter.put("/:id", userController.update);
// userRouter.delete("/:id", userController.delete);

export default userRouter;