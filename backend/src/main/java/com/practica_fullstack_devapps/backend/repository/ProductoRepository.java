package com.practica_fullstack_devapps.backend.repository;

import com.practica_fullstack_devapps.backend.entity.Producto; // Asegúrate que la ruta a tu clase Producto sea correcta
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    // La magia de Spring Data JPA ocurre aquí
}