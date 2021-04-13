import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-firestoredb',
  templateUrl: './firestoredb.page.html',
  styleUrls: ['./firestoredb.page.scss'],
})
export class FirestoredbPage implements OnInit {

  //observable untuk mengetahui bila ada perubahan
  isiData:Observable<data[]>;
  //isi data coll untuk menampung data dari database
  isiDataColl:AngularFirestoreCollection<data>

  judul:string
  isi:string

  constructor(afs:AngularFirestore) {
    this.isiDataColl=afs.collection('dataCoba')
    this.isiData=this.isiDataColl.valueChanges();
   }

  ngOnInit() {
  }
  simpan(){
    this.isiDataColl.doc(this.judul).set({
      judul:this.judul,
      isi:this.isi
    })
  }

}
interface data{
  judul:string,
  isi:string
}
