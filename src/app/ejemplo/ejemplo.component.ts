import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit{

  constructor() {
  }

  ngOnInit(): void {
    //const teclado : number[]=[0,1,2,3,4,5,6,7,8,9];
    const teclado : number[]=[0,1,2,9,7,5,6,3,8,4];
    const cifra: string = '1297';
    let index:number =0;
    let indexArray:number =1;
    let indexApoyo:number =1;
    let paso:number = 0;
    let operador:boolean= true;
    if(cifra.charAt(0)== String(teclado[0])){
      index++;
    }
    while (operador) {

      if (cifra.charAt(index) == String(teclado[indexApoyo])) {
        index++;
      }
      indexArray++;
      if (indexArray > 19) {
        indexArray = 0;
      }
      if(indexArray > (teclado.length-1)){
        indexApoyo =  (teclado.length-1)-(indexArray-(teclado.length-1))
      }else{
        indexApoyo= indexArray;
      }
      paso++;

      if(index == (cifra.length)){
        operador = false;
        break;
      }
    }
    console.log(paso,'ms')

  }

}


