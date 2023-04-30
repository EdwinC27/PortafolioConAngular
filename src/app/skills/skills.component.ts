import { Component, ElementRef, ViewChild } from '@angular/core';
import { Skills } from './skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
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

  skill : Skills[] = [
    {
      title: "Java",
      img: ".../../assets/imagenes/skills/java.png"
    },
    {
      title: "Spring Boot",
      img: "../../assets/imagenes/skills/spring.png"
    },
    {
      title: "HTML5",
      img: "../../assets/imagenes/skills/html.png"
    },
    {
      title: "CSS3",
      img: "../../assets/imagenes/skills/css.png"
    },
    {
      title: "JavaScript",
      img: "../../assets/imagenes/skills/js.png"
    },
    {
      title: "Angular",
      img: "../../assets/imagenes/skills/angular.png"
    },
    {
      title: "TypeScript",
      img: "../../assets/imagenes/skills/ts.png"
    },
    {
      title: "Kali Linux",
      img: "../../assets/imagenes/skills/kali.png"
    },
    {
      title: "SQL",
      img: "../../assets/imagenes/skills/sql.png"
    }
  ]
}
