//impotar express
const express= require('express');

//Generar una instancia
const app =express();

//definicion de puerto
const port = 3006;

app.get('/',(req,res)=>{
    res.send('Hola mundo');
});


app.listen(port);