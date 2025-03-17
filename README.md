# 🏆 Módulo 2 - BackEnd con Node.js

Bienvenido al repositorio del **Módulo 2** del Bootcamp de Desarrollo Web. Aquí encontrarás el código y ejemplos prácticos relacionados con la construcción de un backend utilizando **Node.js, Express y MongoDB**, siguiendo buenas prácticas y arquitectura MVC.

## 📌 Contenido del Repositorio

Este módulo cubre los siguientes temas fundamentales:

- **Configuración de Express**: Instalación y configuración de un servidor con Express.
- **Conexión a MongoDB Atlas**: Configuración de una base de datos en la nube.
- **Modelo Vista-Controlador (MVC)**: Organización del código en modelos, controladores y rutas.
- **Autenticación con JWT**: Implementación de autenticación segura con JSON Web Tokens.
- **Manejo de Middlewares**: Uso de middlewares en Express para validaciones y seguridad.
- **Encriptación de Contraseñas**: Uso de `bcryptjs` para almacenar contraseñas de forma segura.
- **Pruebas de API con Postman**: Validación del correcto funcionamiento de los endpoints.

Cada tema incluye ejemplos prácticos con código bien documentado y explicaciones claras.

## 🚀 Requisitos Previos

Para trabajar con este repositorio, necesitarás:

- **Node.js** (versión LTS).
- **Postman** o cualquier cliente de APIs para probar las solicitudes HTTP.
- **MongoDB Atlas** con una cuenta activa y una base de datos configurada.
- **Un editor de código** como **VS Code**.

## 📦 Instalaciones Necesarias

Para ejecutar el proyecto, instala las siguientes dependencias en tu entorno local:

```sh
npm install express dotenv mongoose cors nodemon bcryptjs jsonwebtoken
## 📌 Dependencias Explicadas

| Dependencia   | Descripción |
|--------------|------------|
| **Express**  | Framework para construir servidores web y APIs. |
| **Dotenv**   | Manejo de variables de entorno en Node.js. |
| **Mongoose** | Modelado de datos para MongoDB en Node.js. |
| **Cors**     | Middleware para habilitar CORS en el servidor. |
| **Nodemon**  | Reinicio automático del servidor en desarrollo. |
| **Bcryptjs** | Librería para encriptar contraseñas. |
| **Jsonwebtoken** | Implementación de autenticación con JWT. |

## 🔧 Guía de Desarrollo

### 1️⃣ Configuración de Express
- Instalar **Express** en el proyecto.
- Configurar el archivo principal (`server.js`) para importar Express y crear una instancia de la aplicación.
- Definir middlewares como `express.json()` para interpretar JSON en las peticiones.
- Configurar el servidor para escuchar en un puerto especificado.

### 2️⃣ Conexión a MongoDB Atlas
- Crear una cuenta en **MongoDB Atlas** y configurar un nuevo cluster.
- Obtener la **URI de conexión** de MongoDB.
- Instalar `mongoose` para manejar la conexión con MongoDB.
- Crear un archivo `.env` para almacenar la URI de conexión.
- Configurar la conexión en el archivo principal.

### 3️⃣ Implementación de Modelo Vista-Controlador (MVC)
- **Modelos**: Definir esquemas con **Mongoose** para estructurar los datos.
- **Controladores**: Crear funciones para manejar la lógica de la aplicación.
- **Rutas**: Definir endpoints de la API y asociarlos a sus controladores.

### 4️⃣ Autenticación con JWT
- Instalar las dependencias `bcryptjs` y `jsonwebtoken`.
- Crear un sistema de registro y login en el backend.
- Implementar generación de **tokens de autenticación** con JWT.
- Crear un **middleware de autenticación** para proteger rutas.

## 📖 Recursos Recomendados

- [📄 Documentación oficial de Node.js](https://nodejs.org/)
- [🚀 Express Docs](https://expressjs.com/)
- [📦 MongoDB Atlas Docs](https://www.mongodb.com/atlas/database)
- [📜 Mongoose Docs](https://mongoosejs.com/)
- [🔐 JWT (Jsonwebtoken)](https://jwt.io/)

## 🤝 Contribuciones

Si quieres contribuir con mejoras o sugerencias, abre un **issue** o envía un **pull request**. ¡Toda ayuda es bienvenida! 😊

---

📌 **Autor:** BIT  
📅 **Última actualización:** Marzo 2025
