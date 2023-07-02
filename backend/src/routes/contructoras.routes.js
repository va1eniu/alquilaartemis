import { Router } from "express";

import { methodsHTTP as constructorasController } from "../controllers/constructoras.controller.js";
const router = Router();

router.get("/", constructorasController.getConstructoras);
router.post("/", constructorasController.addConstructoras);

// la ruta recibe un parametro
router.get("/:id", constructorasController.getConstructora);

//la ruta debe recibir como parametro el id de la constructoras a eliminar
router.delete("/:id", constructorasController.deleteConstructoras);

router.put("/:id", constructorasController.updateConstructoras);

export default router;
