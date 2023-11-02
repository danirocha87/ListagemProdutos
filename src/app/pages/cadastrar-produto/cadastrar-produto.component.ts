import { Component } from '@angular/core';
import { ProdutoService } from './../../services/produto.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduto } from 'src/app/interfaces/produto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent {

  constructor(private ProdutoService: ProdutoService){}

    produtoForm = new FormGroup({
      nome: new FormControl('',Validators.required),
      codigoBarras: new FormControl('',Validators.required),
      preco: new FormControl(0,Validators.required),
    });

    enviar()
     {
      const produto: IProduto = this.produtoForm.value as unknown as IProduto;
  
       console.log(produto)
       
       this.ProdutoService.cadastrarProduto(produto).subscribe
       (
        (result) =>
          {
            console.log(result)
            Swal.fire
            (
            'PARABÉNS CHAMPS!!',
            'Usuário cadastrado com sucesso!',
            'success'
            );
           },
        (error) =>
         {
          const { message } = error;
          Swal.fire('Erro', message,'error');
        }
       )
        
    } 
}
