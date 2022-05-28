import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet } from 'src/app/models/Pet';

// export enum CRUDMode {
//   View = 'View',
//   Edit = 'Edit',
//   Create = 'Create',
// }

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.scss'],
})
export class PetFormComponent implements OnInit {
  @Input() mode: string = 'Create';
  @Input() pet: Pet;
  @Output() onSubmitPet: EventEmitter<Pet> = new EventEmitter<Pet>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(values: any) {
    this.onSubmitPet.emit(this.pet);
  }
}
