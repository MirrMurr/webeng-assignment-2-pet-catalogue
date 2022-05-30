import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/Pet';
import { PetStatistics } from '../models/pet-statistics';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private backendUrl: string = 'http://127.0.0.1:8080/api';

  constructor(private http: HttpClient) {}

  public getAllAlivePets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.backendUrl}/pet/alive`);
  }

  public getAllPassedAwayPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.backendUrl}/pet/passed`);
  }

  public getPetStatistics(): Observable<PetStatistics> {
    return this.http.get<PetStatistics>(`${this.backendUrl}/pet/statistics`);
  }

  public getAllPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.backendUrl}/pets`);
  }

  public getPetWithId(id: number): Observable<Pet | undefined> {
    return this.http.get<Pet>(`${this.backendUrl}/pets/${id}`);
  }

  public addNewPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(`${this.backendUrl}/pets`, pet);
  }

  public updatePet(pet: Pet): Observable<Pet> {
    return this.http.patch<Pet>(`${this.backendUrl}/pets/${pet.id}`, pet);
  }

  public deletePet(id: number) {
    this.http.delete<Pet>(`${this.backendUrl}/pets/${id}`);
  }
}
