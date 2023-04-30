import { Component, ElementRef, ViewChild } from '@angular/core';
import { Certificados } from './certificados.model';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent {
  imgLinea: String = "../../assets/imagenes/3-line.png";
  index: String = "/";
  misProyectos: String = "/proyectos";
  cursos: String = "cursos";
  skills: String = "skills";
  cv: String = "../../assets/cv.pdf";
  claves: any ;
  showInfo: boolean = false;
  certificadosInfo: any | undefined;
  infoImg: any;
  infoPdf: any;
  tipoTitle: String = "";

  @ViewChild('menu') menu: ElementRef | undefined;

  cambiar(): void {
    this.menu?.nativeElement.classList.toggle('show');
  }
  
  certificados(indice: any): void {
    if (indice == 0) {      
      this.certificadosInfo = this.cert["Ciberseguridad"];
      this.tipoTitle = "Ciberseguridad";
      this.showInfo = true;
      this.infoImg = []; // inicializar como un array vacío
      this.infoPdf = []; // inicializar como un array vacío

      for (let cert in this.certificadosInfo) {
        let certValue = this.certificadosInfo[cert]['img'];
        let certValuePdf = this.certificadosInfo[cert]['url'];

        this.infoImg.push(certValue); // agregar el elemento específico al array
        this.infoPdf.push(certValuePdf); // agregar el elemento específico al array
      }
    }    
    else if(indice == 1) {
      this.certificadosInfo = this.cert["Redes"];
      this.tipoTitle = "Redes";
      this.showInfo = true;
      this.infoImg = []; // inicializar como un array vacío
      this.infoPdf = []; // inicializar como un array vacío

      for (let cert in this.certificadosInfo) {
        let certValue = this.certificadosInfo[cert]['img'];
        let certValuePdf = this.certificadosInfo[cert]['url'];

        this.infoImg.push(certValue); // agregar el elemento específico al array
        this.infoPdf.push(certValuePdf); // agregar el elemento específico al array
      }
    }
    else if(indice == 2) {
      this.certificadosInfo = this.cert["Programacion"];
      this.tipoTitle = "Programación";
      this.showInfo = true;
      this.infoImg = []; // inicializar como un array vacío
      this.infoPdf = []; // inicializar como un array vacío

      for (let cert in this.certificadosInfo) {
        let certValue = this.certificadosInfo[cert]['img'];
        let certValuePdf = this.certificadosInfo[cert]['url'];

        this.infoImg.push(certValue); // agregar el elemento específico al array
        this.infoPdf.push(certValuePdf); // agregar el elemento específico al array
      }
    }
  }

  cert: Certificados = {
    Ciberseguridad: {
      cert1: {
        img: "../../assets/Certificados/img/ciberseguridad/5 horas Ciberseguridad Web Añade seguridad informática al Programar.jpg",
        url: "../../assets/Certificados/pdf/ciberseguridad/5 horas Ciberseguridad Web Añade seguridad informática al Programar.pdf"
      },
      cert2: {
        img: "../../assets/Certificados/img/ciberseguridad/5,5 horas hacking wifi.jpg",
        url: "../../assets/Certificados/pdf/ciberseguridad/5,5 horas hacking wifi.pdf"
      },
      cert3: {
        img: "../../assets/Certificados/img/ciberseguridad/7,5 horas esteconografia.jpg",
        url: "../../assets/Certificados/pdf/ciberseguridad/7,5 horas esteconografia.pdf"
      },
      cert4: {
        img: "../../assets/Certificados/img/ciberseguridad/9 horas hacking kali linux.jpg",
        url: "../../assets/Certificados/pdf/ciberseguridad/9 horas hacking kali linux.pdf"
      },
      cert5: {
        img: "../../assets/Certificados/img/ciberseguridad/9 horas OSING.jpg",
        url: "../../assets/Certificados/pdf/ciberseguridad/9 horas OSING.pdf"
      },
      cert6: {
        img: "../../assets/Certificados/img/ciberseguridad/9,5 horas hacking con python.jpg",
        url: "../../assets/Certificados/pdf/ciberseguridad/9,5 horas hacking con python.pdf"
      },
      cert7: {
        img: "../../assets/Certificados/img/ciberseguridad/11.5 horas auditoria.jpg",
        url: "../../assets/Certificados/pdf/ciberseguridad/11.5 horas auditoria.pdf"
      },
      cert8: {
        img: "../../assets/Certificados/img/ciberseguridad/15,5 hacking.jpg",
        url: "../../assets/Certificados/pdf/ciberseguridad/15,5 hacking.pdf"
      },
      cert9: {
        img: "../../assets/Certificados/img/ciberseguridad/18,5 horas Pentesting web.jpg",
        url: "../../assets/Certificados/pdf/ciberseguridad/18,5 horas Pentesting web.pdf"
      },
      cert10: {
        img: "../../assets/Certificados/img/ciberseguridad/20,5 horas hacking con python.jpg",
        url: "../../assets/Certificados/pdf/ciberseguridad/20,5 horas hacking con python.pdf"
      },
      cert11: {
        img: "../../assets/Certificados/img/ciberseguridad/22,5 horas seguridad informatica.jpg",
        url: "../../assets/Certificados/pdf/ciberseguridad/22,5 horas seguridad informatica.pdf"
      },
      cert12: {
        img: "../../assets/Certificados/img/ciberseguridad/26 horas hacking.jpg",
        url: "../../assets/Certificados/pdf/ciberseguridad/26 horas hacking.pdf"
      },
      cert13: {
        img: "../../assets/Certificados/img/ciberseguridad/28,5 horas deservidores linux.jpg",
        url: "../../assets/Certificados/pdf/ciberseguridad/28,5 horas deservidores linux.pdf"
      },
      cert14: {
        img: "../../assets/Certificados/img/ciberseguridad/40 horas de TryHackMe.jpg",
        url: "../../assets/Certificados/pdf/ciberseguridad/40 horas de TryHackMe.pdf"
      }
    },
    Redes: {
      cert1: {
        img: "../../assets/Certificados/img/redes/13 horas CCNA.jpg",
        url: "../../assets/Certificados/pdf/redes/13 horas CCNA.pdf"
      },
      cert2: {
        img: "../../assets/Certificados/img/redes/13 horas redes.jpg",
        url: "../../assets/Certificados/pdf/redes/13 horas redes.pdf"
      },
      cert3: {
        img: "../../assets/Certificados/img/redes/15 horas CCNA.jpg",
        url: "../../assets/Certificados/pdf/redes/15 horas CCNA.pdf"
      }
    },
    Programacion: {
      cert1: {
        img: "../../assets/Certificados/img/programacion/21,5 horas python.jpg",
        url: "../../assets/Certificados/pdf/programacion/21,5 horas python.pdf"
      },
      cert2: {
        img: "../../assets/Certificados/img/programacion/21.5 horas CSS.jpg",
        url: "../../assets/Certificados/pdf/programacion/21.5 horas CSS.pdf"
      },
      cert3: {
        img: "../../assets/Certificados/img/programacion/36.5 horas de c.jpg",
        url: "../../assets/Certificados/pdf/programacion/36.5 horas de c.pdf"
      },
      cert4: {
        img: "../../assets/Certificados/img/programacion/45.5  horas de c++.jpg",
        url: "../../assets/Certificados/pdf/programacion/45.5  horas de c++.pdf"
      },
      cert5: {
        img: "../../assets/Certificados/img/programacion/56 horas java.jpg",
        url: "../../assets/Certificados/pdf/programacion/56 horas java.pdf"
      },
      cert6: {
        img: "../../assets/Certificados/img/programacion/70.5 horas javascript, html, css.jpg",
        url: "../../assets/Certificados/pdf/programacion/70.5 horas javascript, html, css.pdf"
      },
      cert7: {
        img: "../../assets/Certificados/img/programacion/java_basic.jpg",
        url: "../../assets/Certificados/pdf/programacion/java_basic.pdf"
      },
      cert8: {
        img: "../../assets/Certificados/img/programacion/python_basic.jpg",
        url: "../../assets/Certificados/pdf/programacion/python_basic.pdf"
      },
      cert9: {
        img: "../../assets/Certificados/img/programacion/sql_basic.jpg",
        url: "../../assets/Certificados/pdf/programacion/sql_basic.pdf"
      }
    }
  };

}
