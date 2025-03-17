import express from 'express'

const servidor = express();

servidor.get("/", (solicitud, respuesta)=>{
    respuesta.json({
        saludo: "Hola, desde el servidor"
    })
});

servidor.listen(3000);
console.log("Servidor corriendo en el puerto 3000");