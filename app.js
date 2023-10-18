const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const app = express();


mongoose
  .connect(
    `mongodb+srv://santiscundumi:${process.env.MONGO_DB_PASS}@development.aegvrad.mongodb.net/?retryWrites=true&w=majority`
  )
  .then((res) => {
    app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto : ${port}`);
    });

    console.log("Conexion exitosa a la base de datos");
  })
  .catch((err) => {
    console.log(err);
  });

const productSchema = mongoose.Schema({
  cliente: Array,
});
const usuario = mongoose.model("Usuario", productSchema);
app.use(express.json());

app.post("/api/v1/usuario", (req, res) => {
  const newUsuario = new usuario(req.body);
  newUsuario.save();
  console.log("Peticion recibidas");
  res.status(201).json({ ok: true });
});
app.use(express.static(path.join(__dirname, "public")));
const port = process.env.PORT;
const mySecretKey2 = process.env.CONTRASENA;
console.log(mySecretKey2);