# API REST - Gestión de Productos

API RESTful desarrollada con Java y Spring Boot para gestionar un CRUD de productos.

## Prerrequisitos
* Java JDK 17 o superior.
* Apache Maven 3.8 o superior.
* Servidor de base de datos MySQL.

## Configuración

1.  **Base de Datos:**
    * Asegúrate de tener un servidor MySQL corriendo.
    * Crea una base de datos vacía. En el proyecto se usó el nombre `DevApps`.
        ```sql
        CREATE DATABASE DevApps;
        ```

2.  **Propiedades de la Aplicación:**
    * Navega a `src/main/resources/application.properties`.
    * Modifica las siguientes propiedades para que coincidan con tu configuración de MySQL:
        ```properties
        spring.datasource.url=jdbc:mysql://localhost:3306/DevApps?serverTimezone=UTC
        spring.datasource.username=root
        spring.datasource.password=tu_contraseña_de_mysql
        ```

## Ejecución
1.  Abre el proyecto en IntelliJ IDEA.
2.  Espera a que Maven descargue todas las dependencias.
3.  Busca y ejecuta la clase principal `BackendApplication.java`.
4.  El servidor se iniciará en `http://localhost:8080`. 
