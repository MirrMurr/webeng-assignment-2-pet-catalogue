import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetFormComponent } from './components/pet-form/pet-form.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PetsPageComponent } from './pages/pets-page/pets-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ButtonComponent } from './components/button/button.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { AppVersionComponent } from './components/app-version/app-version.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { MatTableModule } from '@angular/material/table';
import { PetDetailsPageComponent } from './pages/pet-details-page/pet-details-page.component';
import { PetEditPageComponent } from './pages/pet-edit-page/pet-edit-page.component';
import { PetCreatePageComponent } from './pages/pet-create-page/pet-create-page.component';
import { FormsModule } from '@angular/forms';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PetFormComponent,
    AboutPageComponent,
    PetsPageComponent,
    MainPageComponent,
    ButtonComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    LogoComponent,
    AppVersionComponent,
    PetListComponent,
    PetCardComponent,
    PetDetailsPageComponent,
    PetEditPageComponent,
    PetCreatePageComponent,
    LoadingIndicatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
