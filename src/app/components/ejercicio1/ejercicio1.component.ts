import { Component, OnInit } from '@angular/core';
/**
 * Ejercicio 1
 *
 * Crear funciones propias que espere dos numeros y devuelva su suma, resta, multiplicacion y division.
 */
@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styles: [
  ]
})
export class Ejercicio1Component {

  num1:number = 0;
  num2:number = 0;
  res_suma:string = "";
  res_resta:string = "";
  res_multi:string = "";
  res_div:string = "";

  hayResultado:boolean = false;

  calcular() {

    this.res_suma = this.num1 + " + " + this.num2 + " = " + (this.num1 + this.num2);

    this.res_resta = this.num1 + " - " + this.num2 + " = " + (this.num1 - this.num2);

    this.res_multi = this.num1 + " x " + this.num2 + " = " + (this.num1 * this.num2);

    if (this.num2 === 0) {
      this.res_div = "ERROR: No se puede dividir por 0";
    }
    else {
      this.res_div = this.num1 + " / " + this.num2 + " = " + (this.num1 / this.num2);
    }

    this.hayResultado = true;

  }

}
