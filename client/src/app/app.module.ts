import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PetFormComponent } from './components/pet-form/pet-form.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PetsPageComponent } from './pages/pets-page/pets-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PetFormComponent,
    AboutPageComponent,
    PetsPageComponent,
    MainPageComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
