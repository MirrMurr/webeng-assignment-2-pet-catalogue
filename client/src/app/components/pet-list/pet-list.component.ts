import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/Pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
})
export class PetListComponent implements OnInit {
  pets: Pet[];
  // columnsToDisplay: string[] = ['name'];

  constructor(private petService: PetService) {
    this.pets = petService.getAllPets();
  }

  ngOnInit(): void {}
}
