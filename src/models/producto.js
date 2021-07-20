import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    maxLength: 150,
    unique: true,
  },
  precioProducto: {
    type: Number,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
});

const Producto = mongoose.model("producto", productoSchema);

export default Producto;
