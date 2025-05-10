const express = require('express');
const rutas = require("./routes");

//instanciamos express
const app = express();

//configuracion del server uso de rutas
app.use("/",rutas);

//puerto
const port1= 3089;
const port2=3200;
const port3 =3002;
const port =3082;
//Escucha del servidor
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port1}`);

});

app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port2}`);

});

app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port3}`);

});

app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);

});