import getConnection from "./../db/database.js";

const getProductos = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM productos");
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addProductos = async (req, res) => {
  try {
    const { id_producto, nombre_producto, precio_x_dia, stock_producto, categoria_producto } = req.body;

    const category = { id_producto, nombre_producto, precio_x_dia, stock_producto, categoria_producto };
    const connection = await getConnection();

    const result = await connection.query(
      "INSERT INTO productos SET ?",
      category
    );

    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getProducto = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM productos WHERE id_producto = ?",
      id
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteProductos = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM productos WHERE id_producto = ?",
      id
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updateProductos = async (req, res) => {
  try {
    const { id } = req.params;

    const { id_producto, nombre_producto, precio_x_dia, stock_producto, categoria_producto } = req.body;

    const category = { id_producto, nombre_producto, precio_x_dia, stock_producto, categoria_producto };
    const connection = await getConnection();

    const result = await connection.query(
      "UPDATE productos SET ? WHERE id_producto = ?",
      [category, id]
    );

    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methodsHTTP = {
  getProductos,
  addProductos,
  getProducto,
  deleteProductos,
  updateProductos,
};
