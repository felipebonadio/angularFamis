import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-product-save',
  templateUrl: './product-save.component.html',
  styleUrls: ['./product-save.component.css']
})
export class ProdutoSaveComponent implements OnInit {

  error: Error | undefined;
  product: Produto = {} as Produto;

  constructor(private formBuilder: FormBuilder,
              private productService: ProdutoService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  productForm = this.formBuilder.group({
    name: '',
    value: '',
    category: '',
  });

  onSave(product: Produto) {
    if (this.productForm.value.name !== '') {
      this.product.nome = this.productForm.value.name;
      this.product.valor = this.productForm.value.value;
      this.product.categoria = this.productForm.value.category;     
     
      this.productService.createProduct(product).subscribe(newProduct =>{
        this.product = newProduct;
      },(error) => (this.error = error as any) );    
      window.alert("Produto cadastrado com sucesso!")
      this.router.navigateByUrl("/admin")
    }
}
}
