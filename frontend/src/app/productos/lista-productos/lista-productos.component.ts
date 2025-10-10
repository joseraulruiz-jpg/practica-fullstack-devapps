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
}