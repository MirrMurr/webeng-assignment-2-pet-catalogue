import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetEditPageComponent } from './pages/pet-edit-page/pet-edit-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PetDetailsPageComponent } from './pages/pet-details-page/pet-details-page.component';
import { PetsPageComponent } from './pages/pets-page/pets-page.component';
import { PetCreatePageComponent } from './pages/pet-create-page/pet-create-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: MainPageComponent,
  },
  {
    path: 'pets',
    component: PetsPageComponent,
  },
  {
    path: 'pets/add',
    component: PetCreatePageComponent,
  },
  {
    path: 'pets/:id',
    component: PetDetailsPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'pets/:id/edit',
    component: PetEditPageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
