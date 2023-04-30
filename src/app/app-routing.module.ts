import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificadosComponent } from './certificados/certificados.component';

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
  },
  {
    path : "cursos",
    component : CertificadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
