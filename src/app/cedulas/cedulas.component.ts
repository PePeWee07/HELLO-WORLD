import { Conditional } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cedulas',
  templateUrl: './cedulas.component.html',
  styleUrls: ['./cedulas.component.css']
})
export class CedulasComponent implements OnInit {

  constructor() { }

  nombre: string='';
  apellido: string='';
  cedula: string="";

  oculto: boolean=true;

  nombrefull: string='';
  provincia: string='';

  img: string='';

  sinProvincia: number=1;

  verificarCedula(){
    const numCedula = isNaN(Number(this.cedula));
    if (this.cedula == '' || this.nombre== '' || this.apellido== '') {
      alert('Rellene todo los Campos')
    }
    else if (numCedula != false){
      alert('Solo se acepta numeros en la Cedula')
    }
    else if (this.cedula.length <= 9){
      alert('Cedula Invalida')
    }
    else{
      // alert('Verificada Correctamente')
      this.region()
      this.oculto= false
    }
  }

  region(){
    let parte = this.cedula.substring(0,2)

    this.nombrefull= this.nombre+ " " +this.apellido

    if (parte == '07') {
      this.provincia= 'El Oro'
      this.img= 'http://4.bp.blogspot.com/--4IM3yHl5U4/VrGE8ydsqvI/AAAAAAAAACc/YZfnPVr0_Mk/s1600/3459618_orig.gif'
    } else if (parte == "01") {
      this.provincia= 'Azuay'
      this.img= 'http://www.ruminahui.de/uploads/1/2/3/7/1237141/929416_orig.gif'
    }
    else{
      this.sinProvincia=2
      this.provincia= 'No se econtro la provincia'
      this.img= 'https://i.gifer.com/MLKe.gif'
    }
  }

  ok(){
    this.nombre= '';
    this.apellido= '';
    this.cedula= '';
    this.nombrefull='';
    this.provincia='';
    this.img = '';
    this.oculto = true;
    this.sinProvincia= 1;
  }


  ngOnInit(): void {
  }

}
