import { Component, OnInit } from '@angular/core';
import { ApiResponse, ProductoService } from '../producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: any[] = [];
  currentPage = 0;
  totalPages = 0;
  pageSize = 5; // Puedes cambiar cuántos productos quieres por página
  filtro = '';

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  onToggleActivo(id: number): void {
  this.productoService.toggleActivo(id).subscribe(productoActualizado => {
    const index = this.productos.findIndex(p => p.id === id);
    if (index !== -1) {
      this.productos[index] = productoActualizado;
    }
  });
}

  cargarProductos(): void {
    this.productoService.getProductos(this.currentPage, this.pageSize, this.filtro) 
      .subscribe((data: ApiResponse) => {
        this.productos = data.content;
        this.totalPages = data.totalPages;
    });
  }

  paginaSiguiente(): void {
    this.currentPage++;
    this.cargarProductos();
  }

  paginaAnterior(): void {
    this.currentPage--;
    this.cargarProductos();
  }

  buscar(): void {
    this.currentPage = 0; // Reinicia a la primera página con cada nueva búsqueda
    this.cargarProductos();
  }
}