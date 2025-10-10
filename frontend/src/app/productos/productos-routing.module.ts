import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }