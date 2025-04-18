import { Component, inject } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-listado',
  imports: [CardComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  rickandmortyService=inject(RickandmortyService)

  personajes=this.rickandmortyService.getPersonajes()

}
