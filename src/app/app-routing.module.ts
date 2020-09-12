import { SkillsComponent } from './miPerfil/skills/skills.component';
import { HomeComponent } from './miPerfil/home/home.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudiesComponent } from './miPerfil/studies/studies.component';
import { ExperienceComponent } from './miPerfil/experience/experience.component';
import { PortfolioComponent } from './miPerfil/portfolio/portfolio.component';
import { ContactMeComponent } from './miPerfil/contact-me/contact-me.component';


const routes: Routes = [ 
  
  {path: 'Home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'Studies', component: StudiesComponent},
  {path: 'Experience', component: ExperienceComponent},
  {path: 'Portfolio', component: PortfolioComponent},
  {path: 'contactMe', component: ContactMeComponent},
  {path: 'Skills', component: SkillsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
