import { Component, OnInit } from '@angular/core';
// import Swal from 'sweetalert2';

// import { ServicesService } from 'src/app/miPerfil/Services/services.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  // estudios: ServicesService[];

  constructor(/*private service: ServicesService*/) { }

  ngOnInit(): void {
    // this.service.getEstudios()
    // .subscribe(data => {
    //   this.estudios = data.map(e => {
    //     const data = e.payload.doc.data();
    //     const id = e.payload.doc.id;
    //     return { id, ...data};
    //   });
    // });
  }

 
}
