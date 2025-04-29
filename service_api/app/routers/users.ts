import { Router } from "express";
import userController from "../controllers/userController";

const userRouter = Router();

userRouter.get("/", userController.getUsers);
userRouter.post("/", userController.createUser);

// le update et delete est down du au typage, perdu 1h30 dessus
// userRouter.put("/:id", userController.updateUser);
// userRouter.delete("/:id", userController.deleteUser);


// userRouter.get("/", userController.list);
// userRouter.get("/:email", userController.findByEmail);
// userRouter.post("/", userController.create);
// userRouter.put("/:id", userController.update);
// userRouter.delete("/:id", userController.delete);

export default userRouter;