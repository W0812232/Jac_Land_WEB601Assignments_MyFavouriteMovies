import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from '../content-card/content-card.component';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  standalone: true,
  imports: [CommonModule, ContentCardComponent],
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  // Define your array of content here so the variable is available in content-list.comp....html
  name: string;
  myContentArray: Content[];
  contentItem = {
    id: 1,
    title: "Pirates of the Caribbean: At World's End",
    description:
      'Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.',
    creator: 'Gore Verbinski',
    imgURL: 'https://angular.io/assets/images/logos/angular/angular.png',
    type: 'PG-13',
    tags: ['Action','Adventure']
  };

  contentItem2 = {
    id: 2,
    title: 'Blade',
    description:
      'A half-vampire, half-mortal man becomes a protector of the mortal race, while slaying evil vampires.',
    creator: 'Stephen Norrington',
    imgURL: 'https://angular.io/assets/images/logos/angular/angular.png',
    type: 'R',
    tags: ['Action','Horror']
  };

  contentItem3 = {
    id: 3,
    title: 'The Lord of the Rings: The Return of the King',
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    creator: 'Peter Jackson',
    imgURL: 'https://angular.io/assets/images/logos/angular/angular.png',
    type: '',
    tags: ['Adventure','Fantasy']
  };
  contentItem4 = {
    id: 4,
    title: 'The 7th Voyage of Sinbad',
    description:
      "When a princess is shrunken by an evil wizard, Sinbad must undertake a quest to an island of monsters to cure her and prevent a war.",
    creator: 'Nathan Juran',
    imgURL: 'https://angular.io/assets/images/logos/angular/angular.png',
    type: 'G',
    tags: ['Action','Adventure','Fantasy']
  };
  contentItem5 = {
    id: 5,
    title: 'Dungeons & Dragons: Honor Among Thieves',
    description:
      "A charming thief and a band of unlikely adventurers embark on an epic quest to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
    creator: 'John Francis Daley/Jonathan Goldstein',
    imgURL: 'https://angular.io/assets/images/logos/angular/angular.png',
    type: 'PG-13',
    tags: ['Action','Adventure','Comedy']
  };
  contentItem6 = {
    id: 6,
    title: 'Drive',
    description:
      "A mysterious Hollywood action film stuntman gets in trouble with gangsters when he tries to help his neighbor's husband rob a pawn shop while serving as his getaway driver.",
    creator: 'Nicolas Winding Refn',
    imgURL: 'https://angular.io/assets/images/logos/angular/angular.png',
    type: 'R',
    tags: ['Action','Drama']
  };
  contentItem7 = {
    id: 7,
    title: 'The Big Short',
    description:
      "In 2006-2007 a group of investors bet against the United States mortgage market. In their research, they discover how flawed and corrupt the market is.",
    creator: 'Adam McKay',
    imgURL: 'https://angular.io/assets/images/logos/angular/angular.png',
    type: 'R',
    tags: ['Biography','Comedy','Drama']
  };

  ngOnInit() {
    this.myContentArray = [
      this.contentItem,
      this.contentItem2,
      this.contentItem3,
      this.contentItem4,
      this.contentItem5
    ];
  }
}

/*'Jaws','Pirates of the Caribbean: At Worlds End', 'Blade', 'The Lord of the Rings: The Return of the King', 'A Fistful of Dollars', 'Dungeons & Dragons: Honor Among Thieves' */
