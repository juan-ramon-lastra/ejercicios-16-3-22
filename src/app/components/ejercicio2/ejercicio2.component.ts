import { Component, OnInit } from '@angular/core';
/**
 * Ejercicio 2
 *
 * Crear una funcion que calcule el area de un triangulo.
 */
@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styles: [
  ]
})
export class Ejercicio2Component {

  base:number = 0;
  altura:number = 0;
  resultado:string = "";

  hayResultado:boolean = false;

  calcularArea() {
    let area = (this.base * this.altura) / 2;
    this.resultado = String("El area del triángulao dado es " + area);
    this.hayResultado = true;
  }

}
