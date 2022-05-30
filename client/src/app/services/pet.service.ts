import { Injectable } from '@angular/core';
import { PETS } from '../mock-pets';
import { Pet } from '../models/Pet';
import delay from '../utils/delay';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private pets: Pet[] = PETS;

  constructor() {}

  public getAllPets(): Pet[] {
    return this.pets;
  }

  public async getPetWithId(id: number): Promise<Pet | undefined> {
    await delay(2000);
    const pet = this.pets.find((pet) => pet.id === id);
    return pet;
  }

  public async addNewPet(pet: Pet): Promise<void> {
    // TODO send request to backend
    await delay(2000);
    this.pets = [...this.pets, pet];
  }

  public async updatePet(pet: Pet): Promise<void> {
    // TODO send request to backend
    await delay(2000);
    const idx = this.pets.findIndex((p) => p.id === pet.id);
    const original = this.pets[idx];
    this.pets[idx] = { ...original, ...pet };
  }

  public async deletePet(id: number): Promise<void> {
    // TODO send request to backend
    await delay(2000);
  }
}
