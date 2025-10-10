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

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.getProductos(this.currentPage, this.pageSize).subscribe(data => {
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
}