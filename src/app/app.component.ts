import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  operandoActual: string = '';
  operandoAnterior: string = '';

  operacion(operacion: string) {
    switch (operacion) {
      case 'limpiar':
        this.limpiar();
        break;
      case 'eliminar':
        console.log("eliminar");
        break;
      case 'dividir':
        console.log("dividir");
        break;
      case 'multiplicar':
        console.log("multiplicar");
        break;
      case 'sumar':
        console.log("sumar");
        break;
      case 'restar':
        console.log("restar");
        break;
      case 'resultado':
        console.log("resultado");
        break;
      default:
        console.log("No match");
        break;
    }
  }

  limpiar() {
    this.operandoActual = '';
    this.operandoAnterior = '';
  }

  agregarNumero(numero: string) {
    if (numero === '.' && this.operandoActual.includes('.')) {
      return
    }
    this.operandoActual = this.operandoActual + numero;
  }
}
