import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/Persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  constructor(private _personaService: PersonaService) { }

  // nombre : string= "";
  // estado: boolean= false;
  // mostrar:  string="";

  // generar() {
  //   this.nombre = ""
  //   this.estado = true;
  // }

  // clear(){
  //   this.mostrar = this.nombre;
  //   this.estado = false;

  // }


persona:Persona = new Persona();

nombre:string='';
mostrar:string="";

oculto: number=1;

personasGuardadas:Persona[]=[];

alerta:number=0;

cleanPersona(){
  this.persona = new Persona()
}

guardar(){
  // alert(this.persona.saludar())
  this._personaService.register(this.persona).subscribe(
    (data: any) => {
      this.personasGuardadas.push(this.persona)
      this.persona = new Persona()
      this.alerta=1;
    }
  )
  // this.personasGuardadas.push(this.persona)
  // this.cleanPersona()
}

getPersonas(){
  this._personaService.getPersona().subscribe(
    (data: Persona[]) => {
      this.personasGuardadas =data;
    }
  )
}

delete(id:number){
  for(let i=0; i<= this.personasGuardadas.length; i++){
    if(this.personasGuardadas[i].id === id){
      this.personasGuardadas.splice(i,1)
      this.alerta=2;
    }

  }
}
cargar(id:number, nombre:string, apellido:string, telefono:string, correoElectronico:string){
  for(let i=0; i<= this.personasGuardadas.length; i++){
    if(this.personasGuardadas[i].id === id){
      this.persona.id= id
      this.persona.nombre= nombre
      this.persona.apellido= apellido
      this.persona.telefono= telefono
      this.persona.correoElectronico= correoElectronico

      this.oculto= 2;
    }
  }
}

 update(id:number){
  // Devuelve el índice numérico que cumple la condición especificada. 
  // Si ningún elemento cumple la condición especificada, se devuelve -1

  for(let i=0; i<= this.personasGuardadas.length; i++){
    if(this.personasGuardadas[i].id === id){
      const a = this.personasGuardadas.findIndex((obj => obj.id == i));
      this.personasGuardadas[a].id = this.persona.id
      this.personasGuardadas[a].nombre = this.persona.nombre
      this.personasGuardadas[a].apellido = this.persona.apellido
      this.personasGuardadas[a].telefono = this.persona.telefono
      this.personasGuardadas[a].correoElectronico = this.persona.correoElectronico
      this.oculto= 1;
      this.alerta=3;
      this.persona = new Persona()
    }
  }
}


ngOnInit(): void {
  this.getPersonas()
}

}
