import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";
import constructorasRoutes from "./routes/contructoras.routes.js";
import productosRoutes from "./routes/productos.routes.js";


const app = express();

app.set("port", 4000);

//Middleware
app.use(express.json());

// Routes
app.use("/api/categorias", categoriaRoutes);

app.use("/api/empleados", empleadosRoutes);

app.use("/api/constructoras", constructorasRoutes);

app.use("/api/productos", productosRoutes);






export default app;
