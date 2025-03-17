// El archivo app.js -> es el archivo de ejecución de nuestroaplicativo web
// Acá vas a configurar nuestro servidor con EXPRESS 

// 1. IMPORTAR LAS DEPENDENCIAS Y MÓDULOS QUE NECESITAMOS
import express from 'express'; //ECMAS 6
import dotenv from 'dotenv'; //dependencia para manejar variables de entorno
import { connectionMongo } from './src/config/dataBase.js';
import { productRouter } from './src/routes/product.routes.js'; //importé mis rutas
import { usersRouter } from './src/routes/user.routes.js';
import loginRouter from './src/routes/login.routes.js';
import cors from 'cors'; //importar la dependencia cors

// 2. configurar el uso de nuestro servidor y dependencias
const app = express(); 
dotenv.config(); //configurando para poder usar variables de entorno
connectionMongo();
const port = process.env.PORT//6000, 9000
app.use(cors()); //permisos para que el backend pueda ser usado en el navegador

// Le indico las rutas que debe utilizar
app.use(express.json()); //para poder usar formato json -> crear y actualizar 
app.use('/productos', productRouter);
app.use('/usuarios', usersRouter);
app.use('/iniciarSesion', loginRouter);



// 3. ejecutar el servidor en nuestro computador
app.listen(port, ()=>{
    console.log('El servidor está ejecutándose correctamente, en el puerto ', port);
});