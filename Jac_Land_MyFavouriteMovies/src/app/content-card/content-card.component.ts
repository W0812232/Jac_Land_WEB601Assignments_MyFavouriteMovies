import { Component } from '@angular/core';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {

    contentList: ContentList;

    constructor() {
      this.contentList = new ContentList();

      const movie1: Content = {
        id: 1,
        title: "Pirates of the Caribbean: At World's End",
        description: 'Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.',
        creator: 'Gore Verbinski',
        imgURL: '',
        type: 'Adventure/Action'
      };

      const movie2: Content = {
        id: 2,
        title: 'Blade',
        description: 'A half-vampire, half-mortal man becomes a protector of the mortal race, while slaying evil vampires.',
        creator: 'Stephen Norrington',
        imgURL: '',
        type: 'Horror/Action'
      };

      const movie3: Content = {
        id: 3,
        title: 'The Lord of the Rings: The Return of the King',
        description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        creator: 'Peter Jackson',
        imgURL: '',
        type: 'Fantasy/Adventure'
      };
      this.contentList.addList(movie1);
      this.contentList.addList(movie2);
      this.contentList.addList(movie3);
    }

    display(index: number): string{
      return this.contentList.display(index);
    }

}
