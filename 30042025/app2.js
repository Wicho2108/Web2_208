//impotar express
const express= require('express');

//Generar una instancia
const app =express();

//definicion de puerto
const port = 3009;

app.get('/',(req,res)=>{
    res.send('Hola mundo desde otro puerto que es el 3009');
});


app.listen(port);


//definicion de puerto
const port1 = 3003;

app.get('/',(req,res)=>{
    res.send('Hola mundo desde otro puerto que es el 3003');
});


app.listen(port1);

//definicion de puerto
const port2 = 3005;

app.get('/',(req,res)=>{
    res.send('Hola mundo desde otro puerto que es el 3005');
});


app.listen(port2);