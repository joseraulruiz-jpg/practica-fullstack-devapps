package com.practica_fullstack_devapps.backend.service;

import com.practica_fullstack_devapps.backend.entity.Producto;
import com.practica_fullstack_devapps.backend.repository.ProductoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {

    private final ProductoRepository productoRepository;

    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    public List<Producto> listarTodosLosProductos() {
        return productoRepository.findAll();
    }

    public Optional<Producto> buscarProductoPorId(Long id) {
        return productoRepository.findById(id);
    }

    public Producto guardarProducto(Producto producto) {
        // Regla: Nombre es único
        if (productoRepository.findByNombreIgnoreCase(producto.getNombre()).isPresent()) {
            throw new IllegalStateException("Ya existe un producto con el nombre: " + producto.getNombre());
        }

        // Validaciones del producto (precio > 0, existencias >= 0)
        validarProducto(producto);

        // Por defecto, un producto nuevo siempre está activo
        producto.setActivo(true);

        return productoRepository.save(producto);
    }

    public Producto actualizarProducto(Long id, Producto productoActualizado) {
        // Primero, buscamos el producto existente
        return productoRepository.findById(id).map(productoExistente -> {

            // Regla: Si el nombre cambia, verificar que el nuevo nombre no esté ya en uso por OTRO producto
            if (!productoExistente.getNombre().equalsIgnoreCase(productoActualizado.getNombre())) {
                if(productoRepository.findByNombreIgnoreCase(productoActualizado.getNombre()).isPresent()){
                    throw new IllegalStateException("El nuevo nombre '" + productoActualizado.getNombre() + "' ya está en uso.");
                }
            }

            // Validaciones del producto actualizado
            validarProducto(productoActualizado);

            // Actualizamos los campos del producto existente
            productoExistente.setNombre(productoActualizado.getNombre());
            productoExistente.setMarca(productoActualizado.getMarca());
            productoExistente.setCategoria(productoActualizado.getCategoria());
            productoExistente.setPrecio(productoActualizado.getPrecio());
            productoExistente.setExistencias(productoActualizado.getExistencias());

            // Guardamos el producto con los campos ya actualizados
            return productoRepository.save(productoExistente);
        }).orElseThrow(() -> new RuntimeException("Producto no encontrado con el id: " + id));
    }

    // Método privado para no repetir el código de validación
    private void validarProducto(Producto producto) {
        // Regla: Precio > 0
        if (producto.getPrecio() == null || producto.getPrecio() <= 0) {
            throw new IllegalArgumentException("El precio del producto debe ser mayor a cero.");
        }
        // Regla: Existencias >= 0
        if (producto.getExistencias() == null || producto.getExistencias() < 0) {
            throw new IllegalArgumentException("Las existencias del producto no pueden ser negativas.");
        }
    }
}