import { Component, OnInit } from '@angular/core';

import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  // Define your array of content
  movies = [
    {
      id: 1,
        title: "Pirates of the Caribbean: At World's End",
        description: 'Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.',
        creator: 'Gore Verbinski',
        imgURL: '',
        type: 'Adventure/Action'
    },
    {
      id: 2,
        title: 'Blade',
        description: 'A half-vampire, half-mortal man becomes a protector of the mortal race, while slaying evil vampires.',
        creator: 'Stephen Norrington',
        imgURL: 'https://angular.io/assets/images/logos/angular/angular.png',
        type: 'Horror/Action'
    }
  ];
  }
  
 
/*'Jaws','Pirates of the Caribbean: At Worlds End', 'Blade', 'The Lord of the Rings: The Return of the King', 'A Fistful of Dollars', 'Dungeons & Dragons: Honor Among Thieves' */