import { Component, OnInit } from '@angular/core';
import { PetStatistics } from 'src/app/models/pet-statistics';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  petStatistics: PetStatistics;

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.petService.getPetStatistics().subscribe((res) => {
      this.petStatistics = res;
    });
  }
}
