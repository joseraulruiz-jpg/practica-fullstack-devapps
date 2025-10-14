import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Vistas/login/login.component'; // <-- 1. IMPORTA LOGINCOMPONENT

const routes: Routes = [
  // 2. AÑADE ESTAS RUTAS:
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige la ruta vacía a /login

  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }