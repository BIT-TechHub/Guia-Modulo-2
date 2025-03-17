// ACÁ VAMOS A CONFIGURAR LOS MÉTODOS NECESARIOS PARA GENERAR Y VERIFICAR NUESTRO
// TOKEN E AUTENTICACIÓN

// 1. Instalar la librería -> npm i jsonwebtoken
// 2. crearnos una clave secreta

// ---------------------------------------------------------------------------

// 3.Importar módulos y dependencias que necesitemos
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// 4. configurar el uso de la clave secreta creada en el archivo .env
const key = process.env.SECRET_KEY;

// 5. Crear las funciones para generar y verificar el token

// Función para generar token -> funciones declaradas o funciones flecha
// payload -> información del usuario
export function generateToken(payload) {
  // nos estamos creando una función que promete devolver una respuesta después de cierto tiempo
  // Estamos utilizando una función que se llama callback -> ()=>{} -> dedvuelve algo
  return new Promise((resolve, reject) => {
    jwt.sign(payload, key, { expiresIn: "1h" }, (error, token) => {
      if (error) {
        // si sale mal, que me responsa con un error
        reject(new Error("Error al generar JWT " + error.message));
      } else {
        // Si sale bien, que me responsa con el token
        resolve(token);
      }
    });
  });
}

// Función para verficar que el token sea el generado por nuestro servidor y no fue alterado
// token -> el token que queremos verificar
export const verifyToken = (token) => {

  return new Promise((resolve, reject) => {

    jwt.verify(token, key, (error, decoded) => {
      if (error) {
        // si sale mal, que me responsa con un error
        reject(new Error("Error al verificar JWT " + error.message));
      }else{
        resolve(decoded);
      }

    });
  });
}
