import { Component, inject } from '@angular/core';
import { SearchComponent } from '../search/search.component';


@Component({
  selector: 'app-navbar',
  imports: [SearchComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 
}
