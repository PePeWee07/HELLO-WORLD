import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  num1= ''
  num2= ''
  respuesta= 0

  ngOnInit(): void {
  }

  sumar(){
    this.respuesta = Number(this.num1) +  Number(this.num2)
  }
  restar(){
    this.respuesta = Number(this.num1) - Number(this.num2)
  }
  multiplicar(){
    this.respuesta = Number(this.num1) * Number(this.num2)
  }
  dividir(){
    this.respuesta = Number(this.num1) / Number(this.num2)
  }
  raiz1(){
    this.respuesta = Math.sqrt(Number(this.num1))
  }
  raiz2(){
    this.respuesta = Math.sqrt(Number(this.num2))
  }
  Limpiar(){
    this.num1= '',
    this.num2= '',
    this.respuesta= 0
  }

  // generarAlerta(){
  //   alert('Hola')
  // }

}
