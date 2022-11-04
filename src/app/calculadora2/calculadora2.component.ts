import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora2',
  templateUrl: './calculadora2.component.html',
  styleUrls: ['./calculadora2.component.css']
})
export class Calculadora2Component implements OnInit {

  constructor() { }
  
  numeroConcatenado: string="";
  numero1: number=0;
  numero2: number=0;
  respuesta: number=0;
  operadorAsignado: String='';

  concatenarNumero(numero:number){
      this.numeroConcatenado = this.numeroConcatenado + numero
  }

  calcular(operador:string){

    this.operadorAsignado = operador
    this.numero1 = Number(this.numeroConcatenado)
    this.numeroConcatenado= ''
  }

  resultado(){
    this.numero2 = Number(this.numeroConcatenado)

    if(this.operadorAsignado == '+'){
      this.respuesta = this.numero1 + this.numero2
    }
    if(this.operadorAsignado == '-'){
      this.respuesta = this.numero1 - this.numero2
    }
    if(this.operadorAsignado == '*'){
      this.respuesta = this.numero1 * this.numero2
    }
    if(this.operadorAsignado == '/'){
      this.respuesta = this.numero1 / this.numero2
    }

    this.numeroConcatenado= this.respuesta + ''
  }

  Ce(){
    this.numero1= 0;
    this.numero2 = 0;
    this.numeroConcatenado = '';
  }
  

  ngOnInit(): void {
  }

}
