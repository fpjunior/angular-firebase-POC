import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { map, Observable, pipe } from 'rxjs';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private db: AngularFireDatabase ) {

   }

  insert(contato: Contato){
    this.db.list('contato').push(contato)
    .then((result: any) => {
      console.log(result.key);
    });
 }


  update(contato: Contato, key: string){
    this.db.list('contato').update(key, contato)
    .catch((error: any) => {
      console.error(error);
    });
  }

  getAll(){
    return this.db.list('contato')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() as object }));
      })
    );
  }

  delete(key: string){
    this.db.object(`contato/${key}`).remove();
  }

}
