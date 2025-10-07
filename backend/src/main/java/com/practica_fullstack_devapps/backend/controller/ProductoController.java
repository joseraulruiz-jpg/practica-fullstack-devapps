package com.practica_fullstack_devapps.backend.controller;

import com.practica_fullstack_devapps.backend.entity.Producto;
import com.practica_fullstack_devapps.backend.service.ProductoService;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/productos")
public class ProductoController {

    private final ProductoService productoService;

    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    // --- Endpoints Requeridos por la Práctica ---

    // 1. GET /productos – listar con paginación
    @GetMapping
    public Page<Producto> listarProductos(Pageable pageable) {
        return productoService.listarProductos(pageable);
    }

    // 2. POST /productos – crear
    @PostMapping
    public ResponseEntity<Producto> crearProducto(@RequestBody Producto producto) {
        Producto nuevoProducto = productoService.guardarProducto(producto);
        return new ResponseEntity<>(nuevoProducto, HttpStatus.CREATED);
    }

    // 3. GET /productos/{id} – detalle
    @GetMapping("/{id}")
    public ResponseEntity<Producto> obtenerProductoPorId(@PathVariable Long id) {
        return productoService.buscarProductoPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // 4. PUT /productos/{id} – actualizar
    @PutMapping("/{id}")
    public ResponseEntity<Producto> actualizarProducto(@PathVariable Long id, @RequestBody Producto productoDetalles) {
        try {
            Producto productoActualizado = productoService.actualizarProducto(id, productoDetalles);
            return ResponseEntity.ok(productoActualizado);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // 5. PATCH /productos/{id}/activar – activar/desactivar
    @PatchMapping("/{id}/activar")
    public ResponseEntity<Producto> activarDesactivarProducto(@PathVariable Long id) {
        try {
            Producto producto = productoService.activarDesactivarProducto(id);
            return ResponseEntity.ok(producto);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // 6. POST /productos/{id}/ajustar – ajuste de inventario
    @PostMapping("/{id}/ajustar")
    public ResponseEntity<Producto> ajustarInventario(@PathVariable Long id, @RequestBody Map<String, Integer> ajuste) {
        try {
            Integer cantidad = ajuste.get("cantidad");
            if (cantidad == null) {
                return ResponseEntity.badRequest().build(); // Error si no se envía la cantidad
            }
            Producto producto = productoService.ajustarInventario(id, cantidad);
            return ResponseEntity.ok(producto);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}