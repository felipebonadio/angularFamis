import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CollaboratorDetailsComponent } from './collaborator/collaborator-details/collaborator-details.component';
import { CollaboratorSaveComponent } from './collaborator/collaborator-save/collaborator-save.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { HomeComponent } from './home/home.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderComponent } from './order/order.component';
import { ProductSaveComponent } from './product/product-save/product-save.component';
import { ProductComponent } from './product/product.component';


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
    path: 'orders',
    component: OrderComponent
  },
  {
    path: 'orders/:id',
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
    path: 'orderdetails',
    component: OrderDetailsComponent
  },
  {
    path: 'collaborators',
    component: CollaboratorComponent
  },
  {
    path: 'products',
    component: ProductComponent
  },{
    path: 'collaborators/:id',
    component: CollaboratorDetailsComponent
  },
  {
    path: 'saveCollaborator',
    component: CollaboratorSaveComponent
  },
  {
    path: 'saveProduct',
    component: ProductSaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
