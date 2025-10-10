import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductosRoutingModule } from './productos-routing.module';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoAjusteComponent } from './producto-ajuste/producto-ajuste.component';


@NgModule({
  declarations: [ListaProductosComponent, ProductoFormComponent, ProductoDetalleComponent, ProductoAjusteComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductosModule { }
