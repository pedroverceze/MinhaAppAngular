import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl : './dataBinding.component.html'
})
export class DataBindingComponent  {

  public contadorClique: number = 0;
  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";

}
