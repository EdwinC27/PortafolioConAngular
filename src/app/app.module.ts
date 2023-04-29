import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PorqueContratarmeComponent } from './porque-contratarme/porque-contratarme.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    PorqueContratarmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
