import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from 'src/app/model/products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-save',
  templateUrl: './product-save.component.html',
  styleUrls: ['./product-save.component.css']
})
export class ProductSaveComponent implements OnInit {

  error: Error | undefined;
  product: Products = {} as Products;

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  productForm = this.formBuilder.group({
    name: '',
    value: '',
    category: '',
  });

  onSave(product: Products) {
    if (this.productForm.value.name !== '') {
      this.product.name = this.productForm.value.name;
      this.product.value = this.productForm.value.value;
      this.product.category = this.productForm.value.category;     
     
      this.productService.createProduct(product).subscribe(newProduct =>{
        this.product = newProduct;
      },(error) => (this.error = error as any) );    
      window.alert("Produto cadastrado com sucesso!")
      this.router.navigateByUrl("/admin")
    }
}
}
