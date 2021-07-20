import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
  username: {
    type: String,
    required: true,
    maxLength: 150,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    maxLength: 150,
  },
});

const Usuario = mongoose.model("usuario", usuarioSchema);

export default Usuario;
