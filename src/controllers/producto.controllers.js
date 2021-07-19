import Producto from "../models/producto";

const cafeteriaCtrl = {};

cafeteriaCtrl.getPrueba = (req, res) => {
  res.send("Hola desde el servidor");
};

cafeteriaCtrl.productoNuevo = async (req, res) => {
  // console.log(req.body);
  try {
    // Agrego validación (todavía no lo hice)
    console.log(req.body.nombreProducto);
    // Creo un objeto para guardar en la base de datos
    const nuevoProducto = new Producto({
      nombreProducto: req.body.nombreProducto,
      precioProducto: req.body.precioProducto,
      categoria: req.body.categoria,
    });
    // Guardo el objeto para guardar en la base de datos
    await nuevoProducto.save();
    // Enviar respuesta al fronted
    res.status(201).json({
      mensaje: "Producto agregado a la BD ;)",
    });
  } catch (error) {
    console.log(error);
    // Enviar error al fronted
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al agregar el producto" });
  }
};

export default cafeteriaCtrl;
