import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/produto';
import { ModalService } from '../service/modal.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProductComponent implements OnInit {
  error: Error | undefined;
  produtos: Produto[] = [];
  produto: Produto = {} as Produto;

  constructor(
    private produtoService: ProductService,
    private modalService: ModalService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.produtoService
      .getProducts()
      .subscribe((products) => (this.produtos = products));
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
    this.produto.nome = this.productForm.value.name;
    this.produto.valor = this.productForm.value.value;
    this.produto.categoria = this.productForm.value.category;

    this.produtoService.updateProduct(this.produto).subscribe(
      (newProduct) => {
        this.produto = newProduct;
      },
      (error) => (this.error = error as any)
    );
  }

  onDelete(product: Produto) {
    this.produtoService.deleteProduct(product.id).subscribe(
      (response) => {
        this.produto = {} as Produto;
        this.closeModal('delete'), this.openModal('deleteOk');
      },
      (error) => (this.error = error as any)
    );
    window.alert('Excluído com sucesso!');
    this.router.navigateByUrl('/collaborators');
  }
}
