import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {
  imgLinea: String = "../../assets/imagenes/3-line.png";
  index: String = "";
  misProyectos: String = "";
  cursos: String = "";
  skills: String = "";
  cv: String = "";

  @ViewChild('menu') menu: ElementRef | undefined;

  cambiar(): void {
    this.menu?.nativeElement.classList.toggle('show');
  }
}
