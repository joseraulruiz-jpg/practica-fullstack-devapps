package com.practica_fullstack_devapps.backend.service;

import com.practica_fullstack_devapps.backend.entity.Producto;
import com.practica_fullstack_devapps.backend.repository.ProductoRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {

    private final ProductoRepository productoRepository;

    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    @Transactional(readOnly = true)
    public Page<Producto> listarProductos(Pageable pageable) {
        return productoRepository.findAll(pageable);
    }

    @Transactional(readOnly = true)
    public Optional<Producto> buscarProductoPorId(Long id) {
        return productoRepository.findById(id);
    }

    @Transactional
    public Producto guardarProducto(Producto producto) {
        if (productoRepository.findByNombreIgnoreCase(producto.getNombre()).isPresent()) {
            throw new IllegalStateException("Ya existe un producto con el nombre: " + producto.getNombre());
        }
        validarProducto(producto);
        producto.setActivo(true);
        return productoRepository.save(producto);
    }

    @Transactional
    public Producto actualizarProducto(Long id, Producto productoActualizado) {
        return productoRepository.findById(id).map(productoExistente -> {
            if (!productoExistente.getNombre().equalsIgnoreCase(productoActualizado.getNombre())) {
                if(productoRepository.findByNombreIgnoreCase(productoActualizado.getNombre()).isPresent()){
                    throw new IllegalStateException("El nuevo nombre '" + productoActualizado.getNombre() + "' ya está en uso.");
                }
            }
            validarProducto(productoActualizado);
            productoExistente.setNombre(productoActualizado.getNombre());
            productoExistente.setMarca(productoActualizado.getMarca());
            productoExistente.setCategoria(productoActualizado.getCategoria());
            productoExistente.setPrecio(productoActualizado.getPrecio());
            productoExistente.setExistencias(productoActualizado.getExistencias());
            return productoRepository.save(productoExistente);
        }).orElseThrow(() -> new RuntimeException("Producto no encontrado con el id: " + id));
    }

    // Método para activar o desactivar un producto
    @Transactional
    public Producto activarDesactivarProducto(Long id) {
        Producto producto = productoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado con el id: " + id));
        producto.setActivo(!producto.isActivo());
        return productoRepository.save(producto);
    }

    // Método para ajustar el inventario
    @Transactional
    public Producto ajustarInventario(Long id, int cantidad, String razon) {
        Producto producto = productoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado con el id: " + id));

        int nuevasExistencias = producto.getExistencias() + cantidad;
        if (nuevasExistencias < 0) {
            throw new IllegalArgumentException("No se puede ajustar el inventario a un valor negativo.");
        }
        producto.setExistencias(nuevasExistencias);
        producto.setUltimaRazonAjuste(razon);

        return productoRepository.save(producto);
    }

    private void validarProducto(Producto producto) {
        if (producto.getPrecio() == null || producto.getPrecio() <= 0) {
            throw new IllegalArgumentException("El precio del producto debe ser mayor a cero.");
        }
        if (producto.getExistencias() == null || producto.getExistencias() < 0) {
            throw new IllegalArgumentException("Las existencias del producto no pueden ser negativas.");
        }
    }

    @Transactional(readOnly = true)
    public Page<Producto> listarProductos(String filtro, Pageable pageable) { // <-- Añade el parámetro 'filtro'
        if (filtro != null && !filtro.trim().isEmpty()) {
            // Si hay un filtro, busca por nombre o marca
            return productoRepository.findByNombreContainingIgnoreCaseOrMarcaContainingIgnoreCase(filtro, filtro, pageable);
        }
        // Si no hay filtro, devuelve todos
        return productoRepository.findAll(pageable);
    }

}