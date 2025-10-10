import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: any[] = []; // Array para guardar los productos

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    // Cuando el componente se inicia, llama al servicio
    this.productoService.getProductos().subscribe(data => {
      this.productos = data.content; // Asigna los datos recibidos a nuestro array
    });
  }

  onToggleActivo(id: number): void {
    this.productoService.toggleActivo(id).subscribe(productoActualizado => {
      // Buscamos el índice del producto en nuestro array local
      const index = this.productos.findIndex(p => p.id === id);
      if (index !== -1) {
        // Actualizamos el producto en el array local para que la vista se refresque al instante
        this.productos[index] = productoActualizado;
      }
    });
  }
}