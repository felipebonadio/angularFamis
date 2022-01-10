import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorSaveComponent } from './collaborator-save.component';

describe('CollaboratorSaveComponent', () => {
  let component: CollaboratorSaveComponent;
  let fixture: ComponentFixture<CollaboratorSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratorSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratorSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
