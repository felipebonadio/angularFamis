import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CollaboratorDetailsComponent } from './collaborator-details/collaborator-details.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderComponent } from './order/order.component';

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
    path: 'menu',
    component: MenuComponent
  },{
    path: 'collaborators/:id',
    component: CollaboratorDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
