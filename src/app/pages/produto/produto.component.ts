import { Component, inject } from '@angular/core';
import { ProdutoService } from './../../services/produto.service';
import { IProduto } from 'src/app/interfaces/produto';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  produtos: IProduto[] = [];
  carregando: Boolean = true;

  constructor(private ProdutoService: ProdutoService){}
  ngOnInit(){
    this.buscarTodos();
  }

  buscarTodos() {
    this.ProdutoService.buscarTodos().subscribe((produtos: IProduto[]) => {     
      this.produtos = produtos;
      this.carregando = false;
    });
  }

  remover(id: number) {
    Swal.fire({
      title: 'Deseja deletar?',
      showDenyButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: `Não`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.ProdutoService.deletarProduto(id).subscribe(() => this.buscarTodos());
      } else if (result.isDenied) {
        Swal.fire('Operação cancelada', '', 'info')
      }
    });              
  }

  public router = inject(Router);

  public editarProduto(produto: IProduto)
  {
   this.router.navigate([`produto/editar/${produto.id}`]);
  }

}
