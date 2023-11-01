import { Component } from '@angular/core';
import { ProdutoService } from './../../services/produto.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduto } from 'src/app/interfaces/produto';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent {

  constructor(private ProdutoService: ProdutoService){

    produtoForm = new FormGroup({
      nome: new FormControl(''),
      CodigoDeBarras: new FormControl(''),
      preco: new FormControl(''),
    });
    Enviar() {
      const produto: Partial<IProduto> 
      = this.produtoForm.value as IProduto;
       produto.ativo= true; 
  
       console.log(produto)
       
       this.ProdutoService.cadastrarProduto(Produto)
       .subscribe(result =>{
        console.log(result)
       }
        )
    } 
}
