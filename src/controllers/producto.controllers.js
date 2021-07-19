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

cafeteriaCtrl.listaProductos = async (req, res) => {
  try {
    // Obtener un arreglo con los productos
    const arregloProductos = await Producto.find();
    // Respondemos al fronted
    res.status(200).json(arregloProductos);
  } catch (error) {
    console.log(error);
    // Enviar error al fronted
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al intentar listar los productos" });
  }
};

cafeteriaCtrl.eliminarProducto = async (req, res) => {
  try {
    console.log(req.params.id);
    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "El producto fue eliminado exitosamente" });
  } catch (error) {
    console.log(error);
    // Enviar error al fronted
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al eliminar el producto" });
  }
};
cafeteriaCtrl.editarProducto = async (req, res) => {
  try {
    console.log(req.params.id);
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "El producto fue editado exitosamente" });
  } catch (error) {
    console.log(error);
    // Enviar error al fronted
    res.status(404).json({ mensaje: "Ocurrió un error al editar el producto" });
  }
};

export default cafeteriaCtrl;
