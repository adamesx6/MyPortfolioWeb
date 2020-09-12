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


@NgModule({
  declarations: [
    AppComponent,
    StudiesComponent,
    ExperienceComponent,
    PortfolioComponent,
    ContactMeComponent,
    NavBarComponent,
    HomeComponent,
    SkillsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
