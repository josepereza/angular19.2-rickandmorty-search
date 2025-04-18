import { Component, input } from '@angular/core';
import { Personaje } from '../../interfaces/rickandmorty';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
personaje=input.required<Personaje>()
}
