import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  producto: any = null; // Usaremos 'any' por simplicidad

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productoService.getProductoById(+id).subscribe(data => {
        this.producto = data;
      });
    }
  }

  onToggleActivo(): void {
    if (this.producto && this.producto.id) {
      this.productoService.toggleActivo(this.producto.id).subscribe(productoActualizado => {
        this.producto = productoActualizado; // Actualizamos la vista con la nueva data
      });
    }
  }

  regresar(): void {
    this.router.navigate(['/productos']);
  }
}