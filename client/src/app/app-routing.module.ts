import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PetsPageComponent } from './pages/pets-page/pets-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'pets',
    component: PetsPageComponent,
  },
  // {
  //   path: 'pets/add',
  // },
  // {
  //   path: 'pets/edit',
  // },
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
