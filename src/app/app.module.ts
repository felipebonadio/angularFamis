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
import { ColaboradorDetailsComponent } from './colaborador/colaborador-details/colaborador-details.component';
import { ColaboradorSaveComponent } from './colaborador/colaborador-save/colaborador-save.component';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CaixaComponent } from './caixa/caixa.component';
import { AdminComponent } from './admin/admin.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidoDetailsComponent } from './pedido/pedido-details/pedido-details.component';
import { ModalComponent } from './modal/modal.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoSaveComponent } from './produto/produto-save/product-save.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PedidoComponent,
    PedidoDetailsComponent,
    CaixaComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    ColaboradorComponent,
    ProdutoComponent,
    ColaboradorDetailsComponent,
    ColaboradorSaveComponent,
    ProdutoSaveComponent
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
