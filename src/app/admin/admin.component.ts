import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Restaurant } from '../model/restaurant';
import { AdminService } from '../service/admin.service';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  error: Error | undefined;

  restaurant: Restaurant;

  constructor(
    private modalService: ModalService,
    private adminService: AdminService,
    private formBuilder: FormBuilder
  ) {
    this.restaurant = {} as Restaurant;
  }

  ngOnInit(): void {
    this.adminService
      .getRestaurants()
      .subscribe((restaurant) => (this.restaurant = restaurant[0]));
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  consumerForm = this.formBuilder.group({
    consumer: '',
  });

  onUpdateConsumer() {   
    if (this.consumerForm.value.consumer !== '') {      
      this.restaurant.consumer = this.consumerForm.value.consumer;     
      this.adminService
        .updateConsumerOnRestaurant(this.restaurant)
        .subscribe(
          (newConsumer) => {
            this.restaurant = newConsumer;
            console.warn(newConsumer)
          },         
          (error) => (this.error = error as any)
        );
    }
  }
}
