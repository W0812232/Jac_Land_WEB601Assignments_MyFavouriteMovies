import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss',
})
export class ContentCardComponent implements OnInit {
  @Input() content: Content;

  // Define 3 contentItems
  contentItem2: Content = {
    id: 3,
    title: 'The Lord of the Rings: The Return of the King',
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    creator: 'Peter Jackson',
    imgURL: 'https://angular.io/assets/images/logos/angular/angular .png',
    type: 'Fantasy/Adventure',
  };
  constructor() {}
  ngOnInit() {
    //called after the constructor and called after the first ngOnChanges()
    this.content = {
      id: 3,
      title: 'The Lord of the Rings: The Return of the King',
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      creator: 'Peter Jackson',
      imgURL: 'https://angular.io/assets/images/logos/angular/angular .png',
      type: 'Fantasy/Adventure',
    };
  }
}
