import { Component, inject } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { RickandmortyService } from '../../services/rickandmorty.service';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  rickService=inject(RickandmortyService)
  query = new FormControl('');
  constructor(){
    this.query.valueChanges.subscribe(data=>{
      this.rickService.inputQuery.set(data!)

    })
  }
}
