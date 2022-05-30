export interface Pet {
  id?: number | null;
  name: string;
  species: string;
  dateOfBirth?: string | null;
  dateOfDeath?: string | null;
  note?: string | null;
}
