import { Component, ElementRef, ViewChild } from '@angular/core';
import { Proyectos } from './proyectos.model';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  img: String = "../../assets/imagenes/descarga.jfif";
  github: String = "https://github.com/EdwinC27";
  title: String = "Proyectos";
  sub_title: String = "Estos son algunos proyectos web que he realizado";
  

  imgLinea: String = "../../assets/imagenes/3-line.png";
  index: String = "/";
  misProyectos: String = "/#/proyectos";
  cursos: String = "/#/cursos";
  skills: String = "/#/skills";
  cv: String = "../../assets/cv.pdf";

  @ViewChild('menu') menu: ElementRef | undefined;

  cambiar(): void {
    this.menu?.nativeElement.classList.toggle('show');
  }

  proyectos: Proyectos[] = [ 
    {
      title: "Home Study",
      description: "Este proyecto es un prototipo de una aplicación diseñada para el aprendizaje de personas sin importar su nivel de conocimiento o experiencia en el tema. La aplicación es completamente en línea y tiene como objetivo hacer que el aprendizaje sea accesible y fácil para todos.",
      url: "https://home-study.netlify.app/"
    },
    {
      title: "Tienda de Camisas",
      description: "Este proyecto tiene como objetivo 'vender' diseños de camisetas relacionados con el mundo de la programación web. Aunque se trata solo de diseños, se ha prestado especial atención a la elección de temas y lenguajes de programación populares como Angular, Node, TypeScript, HTML, entre otros, para asegurarnos de que sean atractivos para nuestro público objetivo.",
      url: "https://venta-camisas.netlify.app/"
    },
    {
      title: "Diseño y Desarrollo Web Freelance",
      description: "Este proyecto fue creado con el objetivo de diseñar mi portafolio y explorar diferentes opciones visuales para su presentación. Sin embargo, es importante destacar que este proyecto es puramente visual y no es funcional para dispositivos de escritorio.",
      url: "https://pre-presentacion.netlify.app/"
    },
  ]
}
