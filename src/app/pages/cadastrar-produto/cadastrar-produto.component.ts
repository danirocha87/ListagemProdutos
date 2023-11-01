import { Component } from '@angular/core';
import { ProdutoService } from './../../services/produto.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    enviar() {
      console.log(this.produtoForm.value)
  }
}
