import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { FotoService } from '../service/foto.service';

@Component({
  selector: 'app-hal4',
  templateUrl: './hal4.page.html',
  styleUrls: ['./hal4.page.scss'],
})
export class Hal4Page implements OnInit {

  constructor(private afStorage:AngularFireStorage, public fotoservice:FotoService,public aroute:ActivatedRoute) {}

  url
  ngOnInit(){
    this.url=this.aroute.snapshot.paramMap.get('url')    
    console.log("isi url")
    console.log(this.url)
  }
}
