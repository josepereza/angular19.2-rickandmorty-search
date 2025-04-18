import { Injectable } from '@angular/core';
import { signal } from "@angular/core";
import { httpResource } from "@angular/common/http";
import { toObservable, toSignal } from "@angular/core/rxjs-interop";
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {  RickResponse } from '../interfaces/rickandmorty';
@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {
   API_URL='https://rickandmortyapi.com/api/character'
  constructor() { }

  inputQuery = signal<string>('');

inputQuery$ = toObservable(this.inputQuery).pipe(
  distinctUntilChanged(), 
  debounceTime(400)
);

query = toSignal(this.inputQuery$);

getPersonajes(){

  return  httpResource<RickResponse>(() => `${this.API_URL}/?name=${this.query()}`);

}
}
