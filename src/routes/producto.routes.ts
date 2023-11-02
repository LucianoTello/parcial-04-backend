import { Router } from "express";
import * as productoController from "../controllers/producto.controller";
import { authMiddleware, adminMiddleware } from "../middlewares/auth.middleware";
import { mongoIdValidator , productovalidator} from "../middlewares/validators/productovalidators";
import { handleValidationErrors } from "../middlewares/validation.middleware";

const router = Router()//.use(authMiddleware);

// OBTENER TODOS
router.get("/", productoController.listar);
// CREAR
router.post("/", authMiddleware, adminMiddleware, ...productovalidator, handleValidationErrors, productoController.crear);
// OBTENER UNO
router.get("/:id", mongoIdValidator, handleValidationErrors, productoController.buscar);  
// BORRAR
router.delete("/:id", authMiddleware, adminMiddleware, mongoIdValidator,  handleValidationErrors, productoController.borrar);

export default router;