import { Router } from "express";
import AuthController from "../controllers/auth.controllers";
import userPasswordMiddleware from "../middlewares/user.password.mid";

export const authRoutes = () => {
  const router = Router();
  const controller = new AuthController();

  router.post("/login", userPasswordMiddleware, controller.create);
  router.get("/logout", controller.delete);

  return router;
};