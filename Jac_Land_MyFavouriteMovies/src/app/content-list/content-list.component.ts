import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  movies: Content[];
  constructor () {
    this.movies = [{
      id: 0,
      title: "Blade",
    description: "A half-vampire, half-mortal man becomes a protector of the mortal race, while slaying evil vampires.",
    creator: "Stephen Norrington",
    imgURL: '',
    type: 'Horror/Action'
    }];
  }
}
/*'Jaws','Pirates of the Caribbean: At Worlds End', 'Blade', 'The Lord of the Rings: The Return of the King', 'A Fistful of Dollars', 'Dungeons & Dragons: Honor Among Thieves' */