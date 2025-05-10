const express = require('express');
const router = express.Router();
const path = require('path');

// Definición de las rutas y manejadores

// Ruta principal ( hecha en clase)
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/../index.html"));
});

// Primera ruta adicional
router.get("/about", (req, res) => {
    res.send("<h1>Página Acerca de Nosotros</h1><p>Esta es la página de información sobre nuestro proyecto.</p>");
});

// Segunda ruta adicional
router.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname + "/../registro.html"));
});

// Tercera ruta adicional con parámetro
router.get("/user/:id", (req, res) => {
    res.send(`<h1>Perfil de Usuario</h1><p>Estás viendo el perfil del usuario con ID: ${req.params.id}</p>`);
});

module.exports = router;