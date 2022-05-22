import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/models/Pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-edit-page',
  templateUrl: './pet-edit-page.component.html',
  styleUrls: ['./pet-edit-page.component.scss'],
})
export class PetEditPageComponent implements OnInit {
  public _pet: Pet;

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const pets = this.petService.getAllPets();
    let id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const pet = this.petService.getPetWithId(id);
      if (pet) {
        this._pet = pet;
      }
    }
  }
}
