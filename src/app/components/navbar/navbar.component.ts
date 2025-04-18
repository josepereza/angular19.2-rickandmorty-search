import { Component, inject } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { RickandmortyService } from '../../services/rickandmorty.service';

@Component({
  selector: 'app-navbar',
  imports: [ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  rickService=inject(RickandmortyService)
  query = new FormControl('');
  constructor(){
    this.query.valueChanges.subscribe(data=>{
      this.rickService.inputQuery.set(data!)

    })
  }
}
