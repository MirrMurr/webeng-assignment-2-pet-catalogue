import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/models/Pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-details-page',
  templateUrl: './pet-details-page.component.html',
  styleUrls: ['./pet-details-page.component.scss'],
})
export class PetDetailsPageComponent implements OnInit {
  _pet: Pet;
  loading: boolean = true;

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.loading = true;
      this.petService.getPetWithId(id).subscribe((res) => {
        if (res) {
          this._pet = { ...res };
        }
        this.loading = false;
      });
    }
  }

  deletePet(id: number) {
    this.petService.deletePet(id).subscribe(() => {
      this.router.navigate(['/pets']);
    });
  }
}
