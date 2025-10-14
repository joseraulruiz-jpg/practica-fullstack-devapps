# Reportes de Calidad de Código

## Reporte de SonarLint
A continuación se muestran los resultados del análisis de SonarLint.

`````text
--- BackendApplicationTests.java (1 issue) ---
- Add a nested comment explaining why this method is empty, throw an UnsupportedOperationException or complete the implementation.

--- ProductoController.java (2 issues) ---
- Remove usage of generic wildcard type.
- Remove this unused import 'java.util.Optional'.

--- ProductoService.java (4 issues) ---
- Complete the task associated to this TODO comment.
- Define a constant instead of duplicating this literal "Producto no encontrado con el id: " 3 times.
- Merge this if statement with the enclosing one.
- Remove this unused import 'java.util.List'.

--- application.properties (2 issues) ---
- Revoke and change this password, as it is compromised.
- Make sure this database password gets changed and removed from the code.
`````

## Reporte de ChecStyle (Reglas de Sun)

Checkstyle encontró 110 items en 5 archivos. Los problemas principales se pueden agrupar en las siguientes categorías:

`````text
--- Resumen General (Problemas encontrados en múltiples archivos) ---

1.  **Missing a Javadoc comment:**
    - Varios métodos y clases a lo largo del proyecto no tienen comentarios de documentación Javadoc.

2.  **Line is longer than 80 characters:**
    - Múltiples líneas de código exceden el límite de 80 caracteres, afectando la legibilidad.

3.  **Parameter should be final:**
    - Se recomienda que los parámetros de los métodos (como 'id', 'pageable', 'producto', etc.) sean declarados como 'final'.

4.  **Missing package-info.java file:**
    - Falta un archivo de documentación a nivel de paquete en todos los paquetes.

5.  **File does not end with a newline:**
    - Varios archivos no terminan con una línea en blanco, lo cual es una convención estándar.

6.  **'if' is not followed by whitespace:**
    - Se encontraron sentencias 'if' sin un espacio después, afectando el estilo del código.

--- Problemas Específicos por Archivo ---

* **BackendApplication.java:**
    -   Utility classes should not have a public or default constructor: Sugiere ocultar el constructor de la clase principal.

* **Producto.java:**
    -   Using the '.*' form of import should be avoided: Se debe evitar el uso de 'import jakarta.persistence.*'.

* **ProductoController.java:**
    -   Using the '.*' form of import should be avoided: Se debe evitar el uso de 'import org.springframework.web.bind.annotation.*'.
    -   'productoService' hides a field: El parámetro del constructor tiene el mismo nombre que el campo de la clase.

* **ProductoService.java:**
    -   'productoRepository' hides a field: El parámetro del constructor tiene el mismo nombre que el campo de la clase.
    -   Unused import - java.util.List.

`````
