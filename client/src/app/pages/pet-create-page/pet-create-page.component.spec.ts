import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCreatePageComponent } from './pet-create-page.component';

describe('PetCreatePageComponent', () => {
  let component: PetCreatePageComponent;
  let fixture: ComponentFixture<PetCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
