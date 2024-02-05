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
  myContentArray: Content[];
  contentItem = {
    id: 1,
    title: "Pirates of the Caribbean: At World's End",
    description:
      'Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.',
    creator: 'Gore Verbinski',
    imgURL: '',
    type: 'Adventure/Action',
  };

  contentItem2 = {
    id: 2,
    title: 'Blade',
    description:
      'A half-vampire, half-mortal man becomes a protector of the mortal race, while slaying evil vampires.',
    creator: 'Stephen Norrington',
    imgURL: '',
    type: 'Horror/Action',
  };

  contentItem3 = {
    id: 3,
    title: 'The Lord of the Rings: The Return of the King',
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    creator: 'Peter Jackson',
    imgURL: '',
    type: 'Fantasy/Adventure',
  };

  ngOnInit() {
    this.myContentArray = [
      this.contentItem,
      this.contentItem2,
      this.contentItem3,
    ];
  }
}

/*'Jaws','Pirates of the Caribbean: At Worlds End', 'Blade', 'The Lord of the Rings: The Return of the King', 'A Fistful of Dollars', 'Dungeons & Dragons: Honor Among Thieves' */
