import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public fireservices:AngularFirestore) { }

  // createNewEmployee (Record) {
  //   return this.fireservices.collection('Estudios').add(Record);
  // }

  getEstudios() {
    return this.fireservices.collection('Estudios').snapshotChanges();
  } 

    
}
