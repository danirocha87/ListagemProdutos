import { Component } from '@angular/core';
import { ProdutoService } from './../../services/produto.service';
import { IProduto } from 'src/app/interfaces/produto';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  constructor(private ProdutoService: ProdutoService){}
  ngOnInit(){
    this.ProdutoService.buscarTodos().subscribe
    (
      (produto)=>
      {
        this.produto = produto;
      },
      (error) =>
      {
        console.log(error);
      }
    );
  }

  remover(id: number) {
    this.produto = this.produto.filter((produto) => produto.id !== id);
  }

}
