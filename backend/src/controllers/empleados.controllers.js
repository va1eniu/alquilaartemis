import getConnection from "./../db/database.js";

const getEmpleados = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM empleados");
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addEmpleados = async (req, res) => {
  try {
    const { id_empleado, nombre_empleado, email_empleado, celular_empleado, password_empleado } = req.body;

    const category = { id_empleado, nombre_empleado, email_empleado, celular_empleado, password_empleado };
    const connection = await getConnection();

    const result = await connection.query(
      "INSERT INTO empleados SET ?",
      category
    );

    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getEmpleado = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM empleados WHERE id_empleado = ?",
      id
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteEmpleados = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM empleados WHERE id_empleado = ?",
      id
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updateEmpleados = async (req, res) => {
  try {
    const { id } = req.params;

    const { id_empleado, nombre_empleado, email_empleado, celular_empleado, password_empleado } = req.body;

    const category = { id_empleado, nombre_empleado, email_empleado, celular_empleado, password_empleado };
    const connection = await getConnection();

    const result = await connection.query(
      "UPDATE empleados SET ? WHERE id_empleado = ?",
      [category, id]
    );

    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methodsHTTP = {
  getEmpleados,
  addEmpleados,
  getEmpleado,
  deleteEmpleados,
  updateEmpleados,
};
