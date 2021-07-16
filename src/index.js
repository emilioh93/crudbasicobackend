import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

/* -------------------------------------------------------------------------- */
/*                                    Setup                                   */
/* -------------------------------------------------------------------------- */
/* ---------------------- Creo una instancia de express --------------------- */
const app = express();

/* ------------------------------ Crear puerto ------------------------------ */
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("Estoy usando el puerto " + app.get("port"));
});

/* -------------------------------------------------------------------------- */
/*                      Herramientas extras - Middlewares                     */
/* -------------------------------------------------------------------------- */
// Morgan nos da info detallada de las solicitudes
app.use(morgan("dev"));
// Cors nos permite hacer solicitudes remotas
app.use(cors());
app.use(express.json());
// Para recibir objeto con datos
app.use(express.urlencoded({ extend: true }));
// Permite agregar rutas estáticas
app.use(express.static(path.join(__dirname, "../public")));

/* -------------------------------------------------------------------------- */
/*                                    Rutas                                   */
/* -------------------------------------------------------------------------- */
app.get("/", (req, res) => {
  res.send("Hola desde el servidor");
});
