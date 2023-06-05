import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SkillsComponent} from "./components/skills/skills.component";
import {ContactComponent} from "./components/contact/contact.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {AboutComponent} from "./components/about/about.component";

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  {path:'**', pathMatch: 'full', redirectTo: 'about'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
