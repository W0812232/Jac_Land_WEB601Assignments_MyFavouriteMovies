import { Injectable } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { myContentArray } from './helper-files/contentDB';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  getContent(): Content[] {
    return myContentArray;
    }
    
}
