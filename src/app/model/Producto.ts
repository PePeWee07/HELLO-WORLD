export class Producto {
    
    id:number;
    nombre:string;
    precioUnitario:number;
    iva:number;
    cantidad:number;

    precioConIva:number;
    suma:number;

    constructor(){
        this.id=0;
        this.nombre='';
        this.precioUnitario=0;
        this.iva=0;
        this.cantidad=0;

        this.precioConIva=0;
        this.suma=0
    }

    calcularIva(){
        // precio unitario y iva   Math.round
        let miPrecio1 = this.precioUnitario * this.cantidad
        let calculoIva = ( (miPrecio1 * this.iva)/100)
        var miPrecio3 = Number((Math.abs(calculoIva) * 100).toPrecision(15));
        var miprecio4 = Math.round(miPrecio3) / 100 * Math.sign(calculoIva);
        return this.precioConIva = Number(miPrecio1) + Number(miprecio4)
    }

}