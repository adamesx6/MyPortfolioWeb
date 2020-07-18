import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  Nombre: string = '';
  Sexo: string = '';
  estadoCivil: string = '';
  Cedula: string = '';
  Telefono: string = '';
   
  constructor(private router: Router) {

  }

  portafolio() {
    const data = {
      Nombre: this.Nombre,
      Sexo: this.Sexo,
      estadoCivil: this.estadoCivil,
      Cedula: this.Cedula,
      Telefono: this.Telefono,
    }
    this.router.navigate(['/Portafolio'], {queryParams: data});
  }

  ngOnInit(): void {
  }

  

}
