import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ColaboradorDetailsComponent } from './colaborador/colaborador-details/colaborador-details.component';
import { CollaboratorSaveComponent } from './colaborador/colaborador-save/colaborador-save.component';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { HomeComponent } from './home/home.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderComponent } from './order/order.component';
import { ProductSaveComponent } from './product/product-save/product-save.component';
import { ProductComponent } from './product/produto.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pedidos',
    component: OrderComponent
  },
  {
    path: 'pedidos/:id',
    component: OrderDetailsComponent
  },
  {
    path: 'checkouts',
    component: CheckoutComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'pedidos-detalhes',
    component: OrderDetailsComponent
  },
  {
    path: 'colaboradores',
    component: ColaboradorComponent
  },
  {
    path: 'produtos',
    component: ProductComponent
  },{
    path: 'colaboradores/:id',
    component: ColaboradorDetailsComponent
  },
  {
    path: 'colaborador-save',
    component: CollaboratorSaveComponent
  },
  {
    path: 'produto-save',
    component: ProductSaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
