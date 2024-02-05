import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  // Define your array of content here so the variable is available in content-list.comp....html
  @Input() movies: Content[];

  constructor() {
    this.movies = [];
  }

  ngOnInit(): void {
    this.movies = [
      {
        id: 1,
        title: "Pirates of the Caribbean: At World's End",
        description:
          'Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.',
        creator: 'Gore Verbinski',
        imgURL: 'https://angular.io/assets/images/logos/angular/angular.png',
        type: 'Adventure/Action',
      },
      {
        id: 2,
        title: 'Blade',
        description:
          'A half-vampire, half-mortal man becomes a protector of the mortal race, while slaying evil vampires.',
        creator: 'Stephen Norrington',
        imgURL: 'https://angular.io/assets/images/logos/angular/angular.png',
        type: 'Horror/Action',
      },
      {
        id: 3,
        title: 'The Lord of the Rings: The Return of the King',
        description:
          "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        creator: 'Peter Jackson',
        imgURL: '',
        type: 'Fantasy/Adventure',
      },
    ];
  }
}

/*'Jaws','Pirates of the Caribbean: At Worlds End', 'Blade', 'The Lord of the Rings: The Return of the King', 'A Fistful of Dollars', 'Dungeons & Dragons: Honor Among Thieves' */
