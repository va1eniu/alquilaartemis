import getConnection from "./../db/database.js";

const getConstructoras = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM constructoras");
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addConstructoras = async (req, res) => {
  try {
    const { id_constructora, nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto } = req.body;

    const category = { id_constructora, nombre_constructora, nit_constructora, nombre_representante , email_contacto, telefono_contacto };
    const connection = await getConnection();

    const result = await connection.query(
      "INSERT INTO constructoras SET ?",
      category
    );

    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getConstructora = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM constructoras WHERE id_constructora = ?",
      id
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteConstructoras = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM constructoras WHERE id_constructora = ?",
      id
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updateConstructoras = async (req, res) => {
  try {
    const { id } = req.params;

    const { id_constructora, nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto  } = req.body;

    const category = { id_constructora, nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto  };
    const connection = await getConnection();

    const result = await connection.query(
      "UPDATE constructoras SET ? WHERE id_constructora = ?",
      [category, id]
    );

    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methodsHTTP = {
  getConstructoras,
  addConstructoras,
  getConstructora,
  deleteConstructoras,
  updateConstructoras,
};
