import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet } from 'src/app/models/Pet';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.scss'],
})
export class PetFormComponent implements OnInit {
  _pet: Pet = {
    id: null,
    name: '',
    species: '',
    dateOfBirth: '',
    note: '',
  };

  @Input() mode: 'View' | 'Edit' | 'Create' = 'Create';
  @Input() pet: Pet;
  @Input() loading: boolean = false;

  @Output() onSubmitPet: EventEmitter<Pet> = new EventEmitter<Pet>();

  constructor(private location: Location) {
    if (this.mode === 'Create') {
      this.pet = this._pet;
    }
  }

  ngOnInit(): void {}

  onSubmit(form: any) {
    if (!form.valid) {
      return;
    }

    this.onSubmitPet.emit(this.pet);
  }

  back() {
    this.location.back();
  }
}
