import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CadastrarProdutoComponent } from './pages/cadastrar-produto/cadastrar-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoComponent } from './pages/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdutoComponent,
    CadastrarProdutoComponent,
    ListarProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
