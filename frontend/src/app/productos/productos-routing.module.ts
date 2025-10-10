import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoAjusteComponent } from './producto-ajuste/producto-ajuste.component';

const routes: Routes = [
  {
    path: '', 
    component: ListaProductosComponent
  },
  {
    path: 'nuevo', // Ruta para crear: /productos/nuevo
    component: ProductoFormComponent
  },
  {
    path: 'editar/:id', // Ruta para editar: /productos/editar/1
    component: ProductoFormComponent
  },
    {
    path: 'detalle/:id',
    component: ProductoDetalleComponent
  },
    {
    path: 'ajustar/:id',
    component: ProductoAjusteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }