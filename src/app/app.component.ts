import { Component } from '@angular/core';
import { ProdutoComponent } from './pages/produto/produto.component';
import { IProduto } from './interfaces/produto';
import { ProdutoService } from './services/produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class ProdutoComponent
{
  produto: IProduto[] =[];
  
  constructor (private ProdutoService: ProdutoService){}

ngOnInit(){
  this.ProdutoService.buscarTodos().subscribe
  (
    produto =>
    {
      this.produto = produto;
    },
    (error) => {
      console.log(error);
    }
  );
}

remover(id: number) {
  this.produto = this.produto.filter((produto) => produto.id !== id);
}
}


