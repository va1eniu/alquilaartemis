import { Router } from "express";

import { methodsHTTP as productosController } from "../controllers/productos.controller.js";
const router = Router();

router.get("/", productosController.getProductos);
router.post("/", productosController.addProductos);

// la ruta recibe un parametro
router.get("/:id", productosController.getProducto);

//la ruta debe recibir como parametro el id de la empleados a eliminar
router.delete("/:id", productosController.deleteProductos);

router.put("/:id", productosController.updateProductos);

export default router;