import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Creamos una interfaz para describir la respuesta de la API
export interface ApiResponse {
  content: any[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:8080/productos';

  constructor(private http: HttpClient) { }

  // El método ahora devuelve un Observable de nuestra nueva interfaz
  getProductos(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}