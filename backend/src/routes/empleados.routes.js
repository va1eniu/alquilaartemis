import { Router } from "express";

import { methodsHTTP as empleadosController } from "../controllers/empleados.controllers.js";
const router = Router();

router.get("/", empleadosController.getEmpleados);
router.post("/", empleadosController.addEmpleados);

// la ruta recibe un parametro
router.get("/:id", empleadosController.getEmpleados);

//la ruta debe recibir como parametro el id de la empleados a eliminar
router.delete("/:id", empleadosController.deleteEmpleados);

router.put("/:id", empleadosController.updateEmpleados);

export default router;
