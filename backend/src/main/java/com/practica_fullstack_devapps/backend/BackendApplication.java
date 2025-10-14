package com.practica_fullstack_devapps.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Clase principal de la aplicación de backend.
 */
@SpringBootApplication
public class BackendApplication {

    /**
     * Punto de entrada principal para la aplicación de Spring Boot.
     * @param args Argumentos de la línea de comandos.
     */
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }
}

