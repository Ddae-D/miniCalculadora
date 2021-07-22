import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  checkProperty=false;
  disabledProperty=true;
  statusCheckProperty="deshabilitado";
  // ************************************
  num1:number = 0;
  num2:number = 0;
  resu:number = 0; 
  // ************************************
  habilita(){
    if(this.disabledProperty==true) {
      this.disabledProperty=false;
      this.statusCheckProperty="habilitado";
    }
    else{
      this.disabledProperty=true;
      this.statusCheckProperty="deshabilitado";
      this.num1 = 0;
      this.num2 = 0;
      this.resu = 0;
    }
  }
  suma(){
    //alert(event.target);//HTMLInputElement
    this.resu = ((this.num1) + (this.num2));
  }
  resta(){
    //alert(event.target);//HTMLInputElement
    this.resu = ((this.num1) - (this.num2));
  }
  multiplicacion(){
    //alert(event.target);//HTMLInputElement
    this.resu = ((this.num1) * (this.num2));
  }
} 
