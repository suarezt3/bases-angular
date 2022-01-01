import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Thor', 'Goku', 'Ironman'];

  

  heroeEliminado: string = '';

  borrarHeroe() {
    this.heroeEliminado = this.heroes.pop() || ''; 
  }
}
