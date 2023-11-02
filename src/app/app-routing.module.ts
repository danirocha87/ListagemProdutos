import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './pages/produto/produto.component';
import { CadastrarProdutoComponent } from './pages/cadastrar-produto/cadastrar-produto.component';
import { AtualizarProdutoComponent } from './pages/atualizar-produto/atualizar-produto.component';


const routes: Routes = [
  
  {
    path:'',component:ProdutoComponent,
  },
  
  {
    path:'produto/cadastrar',component:CadastrarProdutoComponent
  },
  {
    path:'produto/editar/:id',component:AtualizarProdutoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
