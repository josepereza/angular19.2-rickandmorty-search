import { Component, inject } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty.service';

@Component({
  selector: 'app-listado',
  imports: [],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  rickandmortyService=inject(RickandmortyService)

  personajes=this.rickandmortyService.getPersonajes()

}
