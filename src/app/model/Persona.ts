export class Persona{

    id:number;
    nombre:string;
    apellido:string;
    correoElectronico:string;
    telefono:string;

    numeroHijos:number;
    cedula:number;
    
    constructor(){
        this.id= 0;
        this.nombre= "";
        this.apellido= "";
        this.correoElectronico= "";
        this.telefono= "";

        this.numeroHijos=0;
        this.cedula=0;
    }

    saludar(){
        return 'Hola soy ' + this.nombre + ' ' + this.apellido
    }
}