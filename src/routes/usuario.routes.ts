import { Router } from "express";
import 'us' 
import  userPasswordMiddleware from "../middlewares/user.password.mid"
import validaTokenMiddleware from "../middlewares/validaToken.midd"
import { UsuarioController } from "../controllers/usuario.controller";

export const UsuarioRoutes = () => {
  const router = Router();

  // Cria um Usuario
  router.post("/", userPasswordMiddleware, new UsuarioController().create);

  // Listar todos os Usuarios
  router.get("/", validaTokenMiddleware, new UsuarioController().list);

  // Atualizar um Usuario
  router.put("/:id", validaTokenMiddleware, new UsuarioController().update);

  // Excluir um Usuario
  router.delete("/:id", validaTokenMiddleware, new UsuarioController().delete);

  return router;
};