import { Component, OnInit } from '@angular/core';
/**
 * Ejercicio 3
 *
 * Crear una funcion que calcule el perimetro de un rectangulo.
 */
@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styles: [
  ]
})
export class Ejercicio3Component implements OnInit {

  lado1:number = 0;
  lado2:number = 0;
  lado3:number = 0;
  lado4:number = 0;

  resultado:string = "";
  hayResultado:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  calcularPerimetro() {
    let perimetro = this.lado1 + this.lado2 + this.lado3 + this.lado4;
    this.resultado = String("El perímetro del rectángulo dado es " + perimetro);
    this.hayResultado = true;
  }

}
