import { Component } from '@angular/core';
import { DataClass } from 'src/app/Models/data-class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  // nationalId : string = "29809232701504";

  // nationalId : string = "29909232701504";

  nationalId : string = "30309232701504";


  creditNumber : string = "001200780097";


dataClass:DataClass=new DataClass('Esraa Moktar','assets/logo.png',['Front End Devoloper','Designer']);



showImg:boolean=true;
toggleImg(){
this.showImg=!this.showImg;
}



}




