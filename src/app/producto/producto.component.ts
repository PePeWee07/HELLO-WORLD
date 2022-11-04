import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/Persona';
import { Producto } from '../model/Producto';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor() { }

  producto: Producto = new Producto();
  productoGuardado: Producto[] = [];

  fullMoney:number = 0;
  bandera:boolean= true;
  oculto:number= 0;
  estado:boolean= false;

  validate(id:number): Boolean{
    let existe = false;
    for (let i = 0; i < this.productoGuardado.length; i++) {
       if (this.productoGuardado[i].id == id) {
        existe = true;
        break
      }
    }

    return existe;
  }

  save(id:number) {
    const productoID = isNaN(this.producto.id);
    const productoPrecio = isNaN(this.producto.precioUnitario);
    const productoIva = isNaN(this.producto.iva);
    const productoCantidad = isNaN(this.producto.cantidad);
        
    if (productoID != false || productoPrecio != false || productoIva != false || productoCantidad != false) {
      // alert('Solo se acepta Numeros (Excepto en el Nombre)')
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'info',
        title: 'Solo se acepta Numeros (Excepto en el Nombre)'
      })
    } else if (this.producto.nombre == '' ) {
      // alert('Ingrese el Nombre del Producto')
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'info',
        title: 'Ingrese el Nombre del Producto'
      })
      
    }else if (this.producto.id <=-1 || this.producto.iva <= -1 || this.producto.cantidad <= -1 || this.producto.precioUnitario <= -1){
      // alert('No se acepta valores Negativos)
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'info',
        title: 'No se acepta valores Negativos'
      })
    } else if(this.producto.precioUnitario <= 0 || this.producto.cantidad <= 0) {
      // alert("No 0 cantidad ni precio")
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'info',
        title: 'No se puede dejar en 0 la Cantidad ni el Precio'
      })
    }else{
      
      if (this.bandera == true) {
        const validarIdProducto = this.validate(id);
        if( validarIdProducto ){
          //  alert('El ID ya Existe')
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'El ID ya Existe'
          })
           return;
        }
        this.productoGuardado.push(this.producto)
        this.producto.calcularIva()
        this.totalMoney()
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Producto Agregado'
        })
      } else {
        try {
          for (let i = 0; i <= this.productoGuardado.length; i++) {
            if (this.productoGuardado[i].id === this.producto.id) {
              this.productoGuardado[i] = this.producto
              this.producto.calcularIva()
              this.totalMoney()
              this.oculto= 0;
              break
            }
          }
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Se Actualizo con Exito'
          })
        } catch (error) {
          console.log(error)
          Swal.fire({
            title: 'ERROR',
            text: "No se econtro el Producto",
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              this.bandera = false
            }
          })
        }
      }
      this.clean();
      this.bandera= true;
      this.estado = false;
    }
  }

  upload(p:Producto){
    this.clean();
    this.producto = p
    this.bandera = false
    this.oculto =  1;
    this.estado = true;
  }

  delete(id: number, nombre: string) {
    Swal.fire({
      html: 
        `<h6>Estas seguro de Eliminar ID:</h6>
        <h5 style="color:red;">${nombre}?</h5>
        <h6>No podras revertir los cambios!</h6>
        `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'La fila fue eliminada.',
          'success'
        )
        for (let i = 0; i <= this.productoGuardado.length; i++) {
          if (this.productoGuardado[i].id === id) {
            this.productoGuardado.splice(i, 1);
            this.totalMoney()
            break
          }
        }
      }
    })
  }

  totalMoney() {
    // .reduce = Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor                  
    this.fullMoney = this.productoGuardado.reduce((acc, el) => acc + (el.precioConIva), 0);
  }

  clean() {
    this.producto = new Producto()
  }

  ngOnInit(): void {
  }

}
