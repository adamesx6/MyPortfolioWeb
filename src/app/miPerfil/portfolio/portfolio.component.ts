import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  background: string = ''
  fruits: { visible: boolean; name: string; color: string; }[];
  size = 27;
  // Data: {Nombre: string; Sexo: string; estadoCivil: string; Cedula: string; telefono: string;}[];
  
  constructor() { 
    
  }

  ngOnInit(): void {
   
   

    // this.fruits = [
    //   { visible: true, name: 'Banana', color: 'yellow' },
    //   { visible: true, name: 'Apple', color: 'red' },
    //   { visible: true, name: 'Orange', color: 'orange' },
    //   { visible: true, name: 'Appear', color: 'green' }

    // ];
    // this.background = 'contentgreen';

    // setTimeout(() => {
    //   this.background = 'contentred'; 
    // }, 3000);
  }
  eliminar(pos) {
    this.fruits.splice(pos, 1);
  }


}
