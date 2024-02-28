import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from '../content-card/content-card.component';
import { ContentFilterPipe } from '../content-filter.pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, ContentFilterPipe, FormsModule],
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  // Define your array of content here so the variable is available in content-list.comp....html
  name: string;
  movie = false;
  searchtext = '';
  myContentArray: Content[];
  contentItem = {
    id: 1,
    title: "Pirates of the Caribbean: At World's End",
    description:
      'Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.',
    creator: 'Gore Verbinski',
    imgURL:
      'https://cdn.jsdelivr.net/gh/W0812232/Jac_Land_WEB601Assignments_MyFavouriteMovies@fe30b2f8d7ac5b20718ad2b56cc69ee988027ec3/Jac_Land_MyFavouriteMovies/src/assets/Images/AtWorldsEnd.jpg',
    type: 'PG-13',
    tags: ['Action', 'Adventure'],
  };

  contentItem2 = {
    id: 2,
    title: 'Blade',
    description:
      'A half-vampire, half-mortal man becomes a protector of the mortal race, while slaying evil vampires.',
    creator: 'Stephen Norrington',
    imgURL:
      'https://cdn.jsdelivr.net/gh/W0812232/Jac_Land_WEB601Assignments_MyFavouriteMovies@80c1096e63beac9b39addb2003a11a17120b2e09/Jac_Land_MyFavouriteMovies/src/assets/Images/blade.jpg',
    type: 'R',
    tags: ['Action', 'Horror'],
  };

  contentItem3 = {
    id: 3,
    title: 'The Lord of the Rings: The Return of the King',
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    creator: 'Peter Jackson',
    imgURL:
      'https://cdn.jsdelivr.net/gh/W0812232/Jac_Land_WEB601Assignments_MyFavouriteMovies@80c1096e63beac9b39addb2003a11a17120b2e09/Jac_Land_MyFavouriteMovies/src/assets/Images/lotrReturnOfTheKing.jpg',
    type: 'PG',
    tags: ['Adventure', 'Fantasy'],
  };
  contentItem4 = {
    id: 4,
    title: 'The 7th Voyage of Sinbad',
    description:
      'When a princess is shrunken by an evil wizard, Sinbad must undertake a quest to an island of monsters to cure her and prevent a war.',
    creator: 'Nathan Juran',
    imgURL:
      'https://cdn.jsdelivr.net/gh/W0812232/Jac_Land_WEB601Assignments_MyFavouriteMovies@80c1096e63beac9b39addb2003a11a17120b2e09/Jac_Land_MyFavouriteMovies/src/assets/Images/7thVoyageOfSinbad.jpg',
    type: 'G',
    tags: ['Action', 'Adventure', 'Fantasy'],
  };
  contentItem5 = {
    id: 5,
    title: 'Dungeons & Dragons: Honor Among Thieves',
    description:
      'A charming thief and a band of unlikely adventurers embark on an epic quest to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.',
    creator: 'John Francis Daley/Jonathan Goldstein',
    imgURL:
      'https://cdn.jsdelivr.net/gh/W0812232/Jac_Land_WEB601Assignments_MyFavouriteMovies@80c1096e63beac9b39addb2003a11a17120b2e09/Jac_Land_MyFavouriteMovies/src/assets/Images/Dugeons&DragonsMovie.jpg',
    type: 'PG-13',
    tags: ['Action', 'Adventure', 'Comedy'],
  };
  contentItem6 = {
    id: 6,
    title: 'Drive',
    description:
      "A mysterious Hollywood action film stuntman gets in trouble with gangsters when he tries to help his neighbor's husband rob a pawn shop while serving as his getaway driver.",
    creator: 'Nicolas Winding Refn',
    imgURL:
      'https://cdn.jsdelivr.net/gh/W0812232/Jac_Land_WEB601Assignments_MyFavouriteMovies@80c1096e63beac9b39addb2003a11a17120b2e09/Jac_Land_MyFavouriteMovies/src/assets/Images/drive.jpg',
    type: 'R',
    tags: ['Action', 'Drama'],
  };
  contentItem7 = {
    id: 7,
    title: 'The Big Short',
    description:
      'In 2006-2007 a group of investors bet against the United States mortgage market. In their research, they discover how flawed and corrupt the market is.',
    creator: 'Adam McKay',
    imgURL:
      'https://cdn.jsdelivr.net/gh/W0812232/Jac_Land_WEB601Assignments_MyFavouriteMovies@80c1096e63beac9b39addb2003a11a17120b2e09/Jac_Land_MyFavouriteMovies/src/assets/Images/theBigShort.jpg',
    type: 'R',
    tags: ['Biography', 'Comedy', 'Drama'],
  };

  ngOnInit() {
    this.myContentArray = [
      this.contentItem,
      this.contentItem2,
      this.contentItem3,
      this.contentItem4,
      this.contentItem5,
      this.contentItem6,
      this.contentItem7,
    ];
  }

  clickEvent() {
    this.movie = this.myContentArray.some((item) => item.title === this.name);
    if (this.movie === true) {
      return;
    }
}

