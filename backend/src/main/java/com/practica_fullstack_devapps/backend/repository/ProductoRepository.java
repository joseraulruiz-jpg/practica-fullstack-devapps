package com.practica_fullstack_devapps.backend.repository;

import com.practica_fullstack_devapps.backend.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {

    // Este método buscará un producto por su nombre, ignorando mayúsculas/minúsculas.
    // Usamos Optional para evitar errores de NullPointerException.
    Optional<Producto> findByNombreIgnoreCase(String nombre);
}