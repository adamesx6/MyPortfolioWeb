import { Component, OnInit } from '@angular/core';



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
   
  constructor() {

  }

  ngOnInit(): void {
  }

  

}
