import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent {

  constructor(
    private produtoService: ProdutoService, 
    private route: ActivatedRoute, 
    private router: Router) {}

      produtoForm = new FormGroup({
      id: new FormControl(0,Validators.required),
      nome: new FormControl('',[Validators.required,Validators.maxLength(255)]),
      codigoBarras: new FormControl(0,[Validators.required,Validators.maxLength(255)]),
      preco: new FormControl(0,Validators.required),
    });

    ngOnInit() {
      const id:number = this.route.snapshot.params['id']; 

      this.produtoService.buscarPorId(id).subscribe((produto: IProduto) => {     
        this.produtoForm = new FormGroup({
          id: new FormControl(produto.id,[Validators.required,Validators.maxLength(100)]),
          nome: new FormControl(produto.nome,[Validators.required,Validators.maxLength(100)]),
          codigoBarras: new FormControl(produto.codigoBarras,Validators.required),
          preco: new FormControl(produto.preco,Validators.required)});
      });

           
    }

  atualizar()
  {
    const produto: IProduto = this.produtoForm.value as unknown as IProduto;
    this.produtoService.atualizarProduto(produto).subscribe
    (
      (result)=>
      {
        console.log(result);
        Swal.fire
        (
          'Produto Editado.',
          'sucesso'
        );
      },
      (error)=>
      {
        const {message} = error;
        Swal.fire("Atenção!Todos os campos precisam estar preenchidos corretamente.");
      }
    )

  }

}
