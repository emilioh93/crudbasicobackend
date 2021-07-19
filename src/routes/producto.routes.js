import { Router } from "express";
import cafeteriaCtrl from "../controllers/producto.controllers";

const router = Router();

/* ------------------------------- Creo rutas ------------------------------- */
router.route("/").get(cafeteriaCtrl.getPrueba);

export default router;
