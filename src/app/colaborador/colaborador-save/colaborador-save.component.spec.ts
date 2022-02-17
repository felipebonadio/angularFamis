import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorSaveComponent } from './colaborador-save.component';

describe('CollaboratorSaveComponent', () => {
  let component: ColaboradorSaveComponent;
  let fixture: ComponentFixture<ColaboradorSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboradorSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradorSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
