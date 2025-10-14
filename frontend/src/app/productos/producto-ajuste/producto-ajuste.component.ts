import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-ajuste',
  templateUrl: './producto-ajuste.component.html',
  styleUrls: ['./producto-ajuste.component.css']
})
export class ProductoAjusteComponent implements OnInit {

  ajusteForm: FormGroup;
  producto: any = null;
  currentProductId!: number;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.ajusteForm = this.fb.group({
      cantidad: [null, [Validators.required, Validators.pattern(/^-?[0-9]\d*$/)]], // Acepta números enteros, positivos o negativos
      razon: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.currentProductId = +id;
      this.productoService.getProductoById(this.currentProductId).subscribe(data => {
        this.producto = data;
      });
    }
  }

  onSubmit(): void {
    if (this.ajusteForm.invalid) {
      return;
    }

    const { cantidad, razon } = this.ajusteForm.value;

    this.productoService.ajustarInventario(this.currentProductId, cantidad, razon).subscribe(() => {
      this.router.navigate(['/productos']);
    });
  }
}