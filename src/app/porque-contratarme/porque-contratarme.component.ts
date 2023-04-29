import { Component } from '@angular/core';

@Component({
  selector: 'app-porque-contratarme',
  templateUrl: './porque-contratarme.component.html',
  styleUrls: ['./porque-contratarme.component.css']
})
export class PorqueContratarmeComponent {
    title:String = "¿Por qué deberían contratarme?";
    sub_title: String = "Porque soy una persona autodidacta y nunca dejo de aprender.";
    text1: String = "Siempre doy lo mejor de mí en todo momento, me adapto fácilmente y puedo trabajar en equipo. Cuando empiezo a aprender algo, nunca lo abandono ni lo pongo en pausa.";
    text2: String = "Aunque no tengo mucha experiencia laboral, tengo conocimientos sólidos en áreas clave como GNU-Linux, redes, informática, ciberseguridad y lenguajes de programación.";

}
