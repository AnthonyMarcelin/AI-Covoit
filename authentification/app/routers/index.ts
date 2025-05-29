import { Router } from "express";
import mainController from "../controllers/mainController";

const router = Router();

router.post("/login", mainController.login);
router.post("/register", mainController.register);
router.get("/password/:password", mainController.cryptPassword);

export default router;