import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'EgNational'
})
export class EgNational implements PipeTransform {

  transform(value: string , format : string): string{
    var dd = value.substr(5,2);
    var mm = value.substr(3,2);

    var y = value.substr(0,1);
    var y2 = value.substr(1,2);

    var yy : string =" ";
    if(Number(y) == 2){
      yy = "1900";
      var x = Number(yy) + Number(y2)
      yy = `${x}` ;
    }else if(Number(y) == 3){
      yy = "2000";
      var x = Number(yy) + Number(y2)
      yy = `${x}` ;
    }


    // var date = `${dd} / ${mm} / ${yy}`;
    var date : string = " ";

    if(format == "fullDate"){
      date = `${dd} / ${mm} / ${yy}`; 
    }else if(format == "yyyy"){
      date = `${yy}`; 
    }else if(format == "mm"){
      date = `${mm}`; 
    }else{
      date = `${dd}`; 
    }
  console.log(date);
    return date;
  }

}

