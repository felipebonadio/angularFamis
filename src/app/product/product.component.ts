import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../model/products';
import { ModalService } from '../service/modal.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  error: Error | undefined;
  products: Products[] = [];
  product: Products = {} as Products;

  constructor(
    private productService: ProductService,
    private modalService: ModalService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  productForm = this.formBuilder.group({
    name: '',
    value: '',
    category: '',
  });

  onUpdate() {
    this.product.name = this.productForm.value.name;
    this.product.value = this.productForm.value.value;
    this.product.category = this.productForm.value.category;

    this.productService.updateProduct(this.product).subscribe(
      (newProduct) => {
        this.product = newProduct;
      },
      (error) => (this.error = error as any)
    );
  }

  onDelete(product: Products) {
    this.productService.deleteProduct(product.id).subscribe(
      (response) => {
        this.product = {} as Products;
        this.closeModal('delete'), this.openModal('deleteOk');
      },
      (error) => (this.error = error as any)
    );
    window.alert('Excluído com sucesso!');
    this.router.navigateByUrl('/collaborators');
  }
}
