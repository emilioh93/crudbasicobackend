import { Router } from "express";
import cafeteriaCtrl from "../controllers/producto.controllers";

const router = Router();

/* ------------------------------- Creo rutas ------------------------------- */
router
  .route("/")
  .get(cafeteriaCtrl.listaProductos)
  .post(cafeteriaCtrl.productoNuevo);

router
  .route("/:id")
  .delete(cafeteriaCtrl.eliminarProducto)
  .put(cafeteriaCtrl.editarProducto)
  .get(cafeteriaCtrl.obtenerProducto);

export default router;
