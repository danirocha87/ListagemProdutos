import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  api= "http://localhost:3000/produto"

  constructor(private http:HttpClient) { }
  
  buscarTodos()
  {
    this.http.get(this.api)
  }
}
