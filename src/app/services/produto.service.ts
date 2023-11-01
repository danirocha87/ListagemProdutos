import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduto } from '../interfaces/produto';
import { CadastrarProdutoComponent } from './../pages/cadastrar-produto/cadastrar-produto.component';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  api= "http://localhost:3000/produto"

  constructor(private http:HttpClient) { }
  
  buscarTodos()
  {
    return this.http.get<IProduto[]>(this.api)
  }

  CadastrarProdutoComponent(produto:IProduto)
  {
    return this.http.post<IProduto>(this.api, produto);
  }
}
