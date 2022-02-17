import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoDetailsComponent } from './pedido-details.component';

describe('OrderDetailsComponent', () => {
  let component: PedidoDetailsComponent;
  let fixture: ComponentFixture<PedidoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
