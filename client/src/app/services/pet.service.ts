import { Injectable } from '@angular/core';
import { PETS } from '../mock-pets';
import { Pet } from '../models/Pet';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private pets: Pet[] = PETS;

  constructor() {}

  public getAllPets(): Pet[] {
    return this.pets;
  }
}
