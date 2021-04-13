import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { FotoService } from '../service/foto.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private afStorage:AngularFireStorage, public fotoservice:FotoService,private router:Router) {}

  urlImageStorage=[]

  async ionViewDidEnter(){
    await this.fotoservice.loadFoto()
    this.tampilkanData()
  }

  tampilkanData(){
    this.urlImageStorage=[]
    var refImage=this.afStorage.storage.ref('imgStorage')        
    refImage.listAll()
      .then((res)=>{
        res.items.forEach((itemRef)=>{      
          console.log(itemRef.name)     
          itemRef.getDownloadURL().then((url)=>{            
            this.urlImageStorage.unshift({
              url:url,
              nama:itemRef.name
            })            
          })
        })
      }).catch((error)=>{
        console.log(error)
      })
  }
  detail(link){
    this.router.navigate(['/hal4',link])    
    
  }
}
