import { Component } from '@angular/core';
/**
 * Ejercicio 5
 *
 * En un hospital existen 3 areas: pediatria, urgencias y traumatologia.
 * El presupuesto anual se reparte de la siguiente manera: urgencias: 37%, pediatria: 42%
 * y traumatologia: 21%. Calcular la cantidad de dinero que recibira cada area
 * para cualquier monto presupuestal.
 */
@Component({
  selector: 'app-ejercicio5',
  templateUrl: './ejercicio5.component.html',
  styles: [
  ]
})
export class Ejercicio5Component {

  presupuesto:number = 0;

  presupuesto_urg:number = 0;
  presupuesto_ped:number = 0;
  presupuesto_trau:number = 0;

  mostrar:boolean = false;

  calcularPresupuestos() {
    this.presupuesto_urg = this.presupuesto * 0.37;
    this.presupuesto_ped = this.presupuesto * 0.42;
    this.presupuesto_trau = this.presupuesto * 0.21;
    this.mostrar = true;
  }

}
