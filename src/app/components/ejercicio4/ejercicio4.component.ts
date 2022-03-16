import { Component } from '@angular/core';
import { Empleado } from './empleado.interface';
/**
 * Ejercicio 4
 *
 * Crear una funcion que evalue 5 datos de empleados y nos devuelva su nombre y
 * quien es el que tiene mayor sueldo.
 */
@Component({
  selector: 'app-ejercicio4',
  templateUrl: './ejercicio4.component.html',
  styles: [
  ]
})
export class Ejercicio4Component {

  empleados:Empleado[] = [];

  empleado:Empleado = {
    nombre: "",
    edad: "",
    email: "",
    telefono: "",
    sueldo: ""
  };

  nombreMayorSueldo:string = "";
  sueldoMayor:number = 0;

  guardarEmpleado() {
    // guardo el empleado
    this.empleados.push(this.empleado);

    // calculo el sueldo mayor cy lo actualizo si lo es
    if (parseFloat(this.empleado.sueldo) > this.sueldoMayor) {
      this.sueldoMayor = parseFloat(this.empleado.sueldo);
      this.nombreMayorSueldo = this.empleado.nombre;
    }

    this.limpiarEmpleado();
  }



  private limpiarEmpleado() {
    this.empleado = {
      nombre: "",
      edad: "",
      email: "",
      telefono: "",
      sueldo: ""
    };
  }

}
