import { Router } from "express";

const router = Router();

/* ------------------------------- Creo rutas ------------------------------- */
router.route("/").get((req, res) => {
  res.send("Hola desde el servidor");
});

export default router;
