import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetEditPageComponent } from './pet-edit-page.component';

describe('PetEditPageComponent', () => {
  let component: PetEditPageComponent;
  let fixture: ComponentFixture<PetEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
