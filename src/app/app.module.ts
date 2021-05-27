import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudiesComponent } from './miPerfil/studies/studies.component';
import { ExperienceComponent } from './miPerfil/experience/experience.component';
import { PortfolioComponent } from './miPerfil/portfolio/portfolio.component';
import { ContactMeComponent } from './miPerfil/contact-me/contact-me.component';
import { NavBarComponent } from './miPerfil/nav-bar/nav-bar.component';
import { HomeComponent } from './miPerfil/home/home.component';
import { SkillsComponent } from './miPerfil/skills/skills.component';


import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FormsModule} from '@angular/forms'

import {ServicesService} from "../app/miPerfil/Services/services.service";
import { FooterComponent } from './miPerfil/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    StudiesComponent,
    ExperienceComponent,
    PortfolioComponent,
    ContactMeComponent,
    NavBarComponent,
    HomeComponent,
    SkillsComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
     FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
