import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PorqueContratarmeComponent } from './porque-contratarme/porque-contratarme.component';
import { MiPasionComponent } from './mi-pasion/mi-pasion.component';
import { ProgramacionComponent } from './programacion/programacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    PorqueContratarmeComponent,
    MiPasionComponent,
    ProgramacionComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
