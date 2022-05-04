--------------------- DOCKER ----------------------

En el archivo .env:
cambiar     TYPEORM_ENTITIES=src/entity/**/*.ts
por         TYPEORM_ENTITIES=build/entity/**/*.js

En consola de la carpeta src:
ejecutar el comando     docker-compose up --build

---------------------------------------------------


------------------ LOCAL ENV ---------------------- 
 
En el archivo .env:
cambiar    TYPEORM_ENTITIES=build/entity/**/*.js
por        TYPEORM_ENTITIES=src/entity/**/*.ts

En consola de la carpeta src:
ejecutar el comando     npm start

NOTA: 
 - Usar Base de Datos Externa o Local
 - La Base de Datos debe ser conectada de forma manual

---------------------------------------------------

.