import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  productoForm: FormGroup;
  editMode = false;
  currentProductId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      marca: [''],
      categoria: [''],
      precio: [null, [Validators.required, Validators.min(0.01)]],
      existencias: [null, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.editMode = true;
        this.currentProductId = +id;
        this.productoService.getProductoById(this.currentProductId).subscribe(producto => {
          this.productoForm.patchValue(producto);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.productoForm.invalid) {
      return;
    }

    const productoData = this.productoForm.value;

    if (this.editMode && this.currentProductId) {
      this.productoService.actualizarProducto(this.currentProductId, productoData).subscribe(() => {
        this.router.navigate(['/productos']);
      });
    } else {
      this.productoService.crearProducto(productoData).subscribe(() => {
        this.router.navigate(['/productos']);
      });
    }
  }
}