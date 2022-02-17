import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CaixaComponent } from './caixa/caixa.component';
import { ColaboradorDetailsComponent } from './colaborador/colaborador-details/colaborador-details.component';
import { ColaboradorSaveComponent } from './colaborador/colaborador-save/colaborador-save.component';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { HomeComponent } from './home/home.component';
import { PedidoDetailsComponent } from './pedido/pedido-details/pedido-details.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProdutoSaveComponent } from './produto/produto-save/product-save.component';
import { ProdutoComponent } from './produto/produto.component';


const routes: Routes = [
  {
    path: '**',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pedidos',
    component: PedidoComponent
  },
  {
    path: 'pedidos/:id',
    component: PedidoDetailsComponent
  },
  {
    path: 'checkouts',
    component: CaixaComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'pedidos-detalhes',
    component: PedidoDetailsComponent
  },
  {
    path: 'colaboradores',
    component: ColaboradorComponent
  },
  {
    path: 'produtos',
    component: ProdutoComponent
  },{
    path: 'colaboradores/:id',
    component: ColaboradorDetailsComponent
  },
  {
    path: 'colaborador-save',
    component: ColaboradorSaveComponent
  },
  {
    path: 'produto-save',
    component: ProdutoSaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
