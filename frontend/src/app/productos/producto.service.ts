import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiResponse {
  content: any[];
  totalPages: number; 
  number: number; 
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:8080/productos';

  constructor(private http: HttpClient) { }

    getProductos(page: number, size: number): Observable<ApiResponse> {
      return this.http.get<ApiResponse>(`${this.apiUrl}?page=${page}&size=${size}&sort=id,asc`);
    }

  // --- MÉTODOS PARA EL FORMULARIO ---

  getProductoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  crearProducto(producto: any): Observable<any> {
    return this.http.post(this.apiUrl, producto);
  }

  actualizarProducto(id: number, producto: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, producto);
  }

  // Activar o desactivar un producto
  toggleActivo(id: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}/activar`, {});
  }

  // Nuevo método para ajustar el inventario
  ajustarInventario(id: number, cantidad: number, razon: string): Observable<any> {
    const body = { cantidad, razon }; // Creamos el cuerpo del JSON que espera el backend
    return this.http.post(`${this.apiUrl}/${id}/ajustar`, body);
  }
}