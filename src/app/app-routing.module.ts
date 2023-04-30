import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path : "",
    component : PresentationComponent
  },
  {
    path : "proyectos",
    component : ProyectosComponent
  },
  {
    path : "skills",
    component : SkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
