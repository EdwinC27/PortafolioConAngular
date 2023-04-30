import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {
  imgLinea: String = "../../assets/imagenes/3-line.png";
  index: String = "/";
  misProyectos: String = "/proyectos";
  cursos: String = "cursos";
  skills: String = "skills";
  cv: String = "../../assets/cv.pdf";

  textPresentation: String = "¡Hola! Soy Edwin Castillo, un apasionado del desarrollo y la gestión de software.";
  textSecundari: String = "Actualmente tengo 18 años y mi gran interés es la tecnología. Disfruto aprendiendo constantemente cosas nuevas relacionadas con la programación, y mi principal pasatiempo es la seguridad informática y el desarrollo.";

  @ViewChild('menu') menu: ElementRef | undefined;

  cambiar(): void {
    this.menu?.nativeElement.classList.toggle('show');
  }
}
