# Aplicación de Gestión de Roles

Esta es una aplicación de gestión de roles que permite a los usuarios con diferentes roles (doctor y administrador) acceder a diferentes secciones de la aplicación. La aplicación está protegida contra varias amenazas de seguridad como clickjacking, XSS, inyección SQL y ataques DoS.

## Características

- **Roles de Usuario**: Los usuarios pueden iniciar sesión como doctor o administrador.
- **Rutas Protegidas**: Los doctores tienen acceso a las rutas `/team` y `/services`, mientras que los administradores tienen acceso a la ruta `/appointment`.
- **Página de Acceso Denegado**: Los usuarios que intenten acceder a rutas no autorizadas serán redirigidos a una página de "No tienes acceso a esta sección".

## Base de Datos Simulada
El archivo `db.json` se utiliza como una base de datos simulada para almacenar la información de los usuarios. Este archivo contiene una lista de usuarios con sus respectivos nombres de usuario, contraseñas y roles. La aplicación utiliza este archivo para autenticar a los usuarios durante el inicio de sesión.

Las credenciales utilizadas para acceder desde el login son:
Username: admin
Contraseña: asd123123
Rol: Administrador

Username: juan
Contraseña: 54321
Rol: Doctor

## Cómo Ejecutar el Proyecto
Sigue estos pasos para ejecutar la aplicación en tu entorno local:

1.- Clona el repositorio:

```
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

2.- Instala las dependencias: Asegúrate de tener Node.js instalado. Luego, instala las dependencias del proyecto:

```
npm install
```

3. Inicia el servidor de desarrollo: Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo:

 ```
 npm run dev

 ```

4. Accede a la aplicación: Abre tu navegador y ve a http://localhost:3000 para ver la aplicación en funcionamiento.

## Cómo Ejecutar la Base de Datos Simulada
Para ejecutar la base de datos simulada utilizando json-server, sigue estos pasos:

1. Instala json-server: Si no tienes json-server instalado globalmente, instálalo usando npm:

```
npm install -g json-server
```

2. Ejecuta json-server: En una nueva terminal, navega hasta el directorio donde se encuentra el archivo db.json y ejecuta el siguiente comando:

```
json-server --watch db.json --port 3000
```
Esto iniciará un servidor JSON en http://localhost:3000 que servirá los datos del archivo db.json.