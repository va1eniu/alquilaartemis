import getConnection from "./../db/database.js";

const getCategorias = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM categorias");
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addCategories = async (req, res) => {
  try {
    const { id_categoria, nombre_categoria, descripcion_categoria, img_categoria } = req.body;

    const category = { id_categoria, nombre_categoria, descripcion_categoria, img_categoria };
    const connection = await getConnection();

    const result = await connection.query(
      "INSERT INTO categorias SET ?",
      category
    );

    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getCategoria = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM categorias WHERE id_categoria = ?",
      id
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM categorias WHERE id_categoria = ?",
      id
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updateCategories = async (req, res) => {
  try {
    const { id } = req.params;

    const { id_categoria, nombre_categoria, descripcion_categoria, img_categoria } = req.body;

    const category = { id_categoria, nombre_categoria, descripcion_categoria, img_categoria };
    const connection = await getConnection();

    const result = await connection.query(
      "UPDATE categorias SET ? WHERE id_categoria = ?",
      [category, id]
    );

    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methodsHTTP = {
  getCategorias,
  addCategories,
  getCategoria,
  deleteCategoria,
  updateCategories,
};
