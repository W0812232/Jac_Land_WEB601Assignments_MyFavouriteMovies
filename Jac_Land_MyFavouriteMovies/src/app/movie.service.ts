import { Injectable } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { myContentArray } from './helper-files/contentDB';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  getContentObs() : Observable<Content[]>{
    return of(myContentArray);
    }
  }

    

