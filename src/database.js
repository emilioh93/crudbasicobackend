import mongoose from "mongoose";

// const url = "mongodb://localhost:27017/crudbasico";
const url = "mongodb+srv://emiliohurtado:Hioscina17214@cluster0.pfmdn.mongodb.net/test";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("BD conectada");
});
