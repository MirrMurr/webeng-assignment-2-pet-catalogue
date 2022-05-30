import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { Pet } from 'src/app/models/Pet';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pet-create-page',
  templateUrl: './pet-create-page.component.html',
  styleUrls: ['./pet-create-page.component.scss'],
})
export class PetCreatePageComponent implements OnInit {
  constructor(private petService: PetService, private router: Router) {}

  ngOnInit(): void {}

  addPet(pet: Pet) {
    this.petService
      .addNewPet(pet)
      .then(() => {
        console.log('Success');
        this.router.navigate(['/pets']);
      })
      .catch((e) => {
        console.log('Error: ', e);
      });
  }
}
