const express = require('express');
const axios = require('axios');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Configuración de rutas y puerto
app.get('/', (req, res) => res.send("API de Redes Sociales en Tiempo Real"));
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Servidor en el puerto ${PORT}`));

