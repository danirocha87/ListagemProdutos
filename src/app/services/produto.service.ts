import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduto } from '../interfaces/produto';
import { CadastrarProdutoComponent } from './../pages/cadastrar-produto/cadastrar-produto.component';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  api= "http://localhost:8080/api/produtos";

  constructor(private http:HttpClient) { }
  
  buscarTodos(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.api)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  cadastrarProduto(produto:IProduto)
  {
    return this.http.post<IProduto>(this.api, produto);
  }

  deletarProduto(id: number){    
    const url = `${this.api}/${id}`;
    return this.http.delete(url);
  }

    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };
}
