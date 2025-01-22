# Aplicación de Gestión de Roles

Esta es una aplicación de gestión de roles que permite a los usuarios con diferentes roles (doctor y administrador) acceder a diferentes secciones de la aplicación. La aplicación está protegida contra varias amenazas de seguridad como clickjacking, XSS, inyección SQL y ataques DoS.

## Características

- **Roles de Usuario**: Los usuarios pueden iniciar sesión como doctor o administrador.
- **Rutas Protegidas**: Los doctores tienen acceso a las rutas `/team` y `/services`, mientras que los administradores tienen acceso a la ruta `/appointment`.
- **Página de Acceso Denegado**: Los usuarios que intenten acceder a rutas no autorizadas serán redirigidos a una página de "No tienes acceso a esta sección".
<!-- - **Medidas de Seguridad**: La aplicación implementa medidas de seguridad contra clickjacking, XSS, inyección SQL y ataques DoS. -->


