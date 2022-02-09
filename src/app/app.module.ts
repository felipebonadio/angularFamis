import { NgModule, LOCALE_ID } from '@angular/core';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { CollaboratorDetailsComponent } from './collaborator/collaborator-details/collaborator-details.component';
import { CollaboratorSaveComponent } from './collaborator/collaborator-save/collaborator-save.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ModalComponent } from './modal/modal.component';
import { ProductComponent } from './product/product.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    OrderComponent,
    OrderDetailsComponent,
    CheckoutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    CollaboratorComponent,
    ProductComponent,
    CollaboratorDetailsComponent,
    CollaboratorSaveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
