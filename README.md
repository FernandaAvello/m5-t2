# Aplicación de Gestión de Roles

Esta es una aplicación de gestión de roles que permite a los usuarios con diferentes roles (doctor y administrador) acceder a diferentes secciones de la aplicación. La aplicación está protegida contra varias amenazas de seguridad como clickjacking, XSS.

## Características

- **Roles de Usuario**: Los usuarios pueden iniciar sesión como doctor o administrador.
- **Rutas Protegidas**: Los doctores tienen acceso a las rutas `/team` y `/services`, mientras que los administradores tienen acceso a la ruta `/appointment`.
- **Página de Acceso Denegado**: Los usuarios que intenten acceder a rutas no autorizadas serán redirigidos a una página de "No tienes acceso a esta sección".

## Base de Datos Simulada

El archivo `db.json` se utiliza como una base de datos simulada para almacenar la información de los usuarios. Este archivo contiene una lista de usuarios con sus respectivos nombres de usuario, contraseñas y roles. La aplicación utiliza este archivo para autenticar a los usuarios durante el inicio de sesión.

## Vulnerabilidades Simuladas

Página con acceso a ruta `/vulnerabilities` dedicada a demostrar vulnerabilidades como XSS y Clickjacking, junto con sus mitigaciones.

1. XSS (Cross-Site Scripting): Evitado mediante sanitización de entradas con funciones auxiliares (sanitizeInput).

2. Clickjacking: Mitigado con encabezados HTTP (X-Frame-Options y Content-Security-Policy).

### Credenciales de Acceso

**Administrador:**
- **Username:** admin
- **Contraseña:** asd123123
- **Rol:** Administrador

**Doctor:**
- **Username:** juan
- **Contraseña:** 54321
- **Rol:** Doctor

## Cómo Ejecutar el Proyecto

Sigue estos pasos para ejecutar la aplicación en tu entorno local:

1. Clona el repositorio:

    ```sh
    git clone https://github.com/FernandaAvello/m5-t2.git
    cd m5-t2/
    ```

2. Instala las dependencias: Asegúrate de tener Node.js instalado. Luego, instala las dependencias del proyecto:

    ```sh
    npm install
    ```

3. Inicia el servidor de desarrollo: Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo:

    ```sh
    npm run dev
    ```

4. Inicia la base de datos simulada: En una nueva terminal, ejecuta el siguiente comando para iniciar la base de datos simulada utilizando json-server:

    ```sh
    npm run server
    ```

5. Accede a la aplicación: Abre tu navegador y ve a [http://localhost:5173](http://localhost:5173) para ver la aplicación en funcionamiento.
