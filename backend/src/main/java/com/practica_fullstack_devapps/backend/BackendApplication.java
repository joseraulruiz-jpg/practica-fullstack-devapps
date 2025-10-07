package com.practica_fullstack_devapps.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.practica_fullstack_devapps.backend.entity.Producto;
import com.practica_fullstack_devapps.backend.service.ProductoService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

    /*
    @Bean
    public CommandLineRunner run(ProductoService productoService) {
        return args -> {
            System.out.println("\n--- INICIANDO PRUEBAS DEL SERVICIO ---");

            // --- PRUEBA 1: Crear un producto válido ---
            try {
                System.out.println("Intentando crear producto 'Laptop Gamer'...");
                Producto laptop = new Producto();
                laptop.setNombre("Laptop Gamer");
                laptop.setMarca("Razer");
                laptop.setCategoria("Electrónica");
                laptop.setPrecio(25000.0);
                laptop.setExistencias(10);
                Producto productoGuardado = productoService.guardarProducto(laptop);
                System.out.println("✅ ÉXITO: Producto guardado con ID: " + productoGuardado.getId());
            } catch (Exception e) {
                System.out.println("❌ ERROR: " + e.getMessage());
            }

            // --- PRUEBA 2: Intentar crear un producto con nombre duplicado ---
            try {
                System.out.println("\nIntentando crear producto 'Laptop Gamer' OTRA VEZ...");
                Producto laptopRepetida = new Producto();
                laptopRepetida.setNombre("Laptop Gamer");
                laptopRepetida.setMarca("Asus");
                laptopRepetida.setCategoria("Computadoras");
                laptopRepetida.setPrecio(22000.0);
                laptopRepetida.setExistencias(5);
                productoService.guardarProducto(laptopRepetida);
            } catch (Exception e) {
                System.out.println("✅ ÉXITO EN LA VALIDACIÓN: Se bloqueó el producto duplicado. Causa: " + e.getMessage());
            }

            // --- PRUEBA 3: Intentar crear un producto con precio inválido ---
            try {
                System.out.println("\nIntentando crear producto con precio negativo...");
                Producto productoInvalido = new Producto();
                productoInvalido.setNombre("Teclado Roto");
                productoInvalido.setMarca("Genérico");
                productoInvalido.setCategoria("Periféricos");
                productoInvalido.setPrecio(-100.0);
                productoInvalido.setExistencias(2);
                productoService.guardarProducto(productoInvalido);
            } catch (Exception e) {
                System.out.println("✅ ÉXITO EN LA VALIDACIÓN: Se bloqueó el precio inválido. Causa: " + e.getMessage());
            }


            System.out.println("\n--- PRUEBAS DEL SERVICIO FINALIZADAS ---\n");
        };
    }
     */
}


