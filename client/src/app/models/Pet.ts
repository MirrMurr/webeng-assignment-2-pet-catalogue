export interface Pet {
  id?: number;
  name: string;
  species: string;
  dateOfBirth: string;
  dateOfDeath?: string | null;
  note?: string | null;
}
