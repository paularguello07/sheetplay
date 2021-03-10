import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sheetplay';
  play:boolean=false;
  play2:boolean=false;
  choose:boolean=false;
  cancion:string="a";
  ruta:string='';
  rutamusica:string='';
  audio = new Audio();
  audio2 = new Audio();
  constructor(){
    

  }
  nose(){
    console.log("go")
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  darplay(){
    this.play=true;
    this.audio.play();
    if(this.audio.onended){
      this.play=false;
    }
  }
  darpause(){
    this.play=false;
    this.audio.pause();
  }


  darplayhimno(){
    this.audio2.src = "assets/canciones/himnoalegria.wav";
    this.play2=true;
    this.audio2.play();
    if(this.audio2.onended){
      this.play2=false;
    }
  }
  darpausehimno(){
    this.play2=false;
    this.audio2.pause();
  }

  escojer(song:string){
    this.choose=true;
    console.log(song);
      this.cancion=song;
    this.ruta="assets/imagenes/"+song+".png";
    
  this.audio.src = "assets/canciones/"+song+".wav";
  this.audio.load();
  
  }
  


}
