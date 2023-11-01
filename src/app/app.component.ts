import { Component } from '@angular/core';
import { ProdutoComponent } from './page/produto/produto.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit 
{

ProdutoComponent:produto[];

constructor(
  public ProdutoComponent: ProdutoComponent
){}

ngOnInit() void{

}

}

  title = 'ListagemProdutos';
