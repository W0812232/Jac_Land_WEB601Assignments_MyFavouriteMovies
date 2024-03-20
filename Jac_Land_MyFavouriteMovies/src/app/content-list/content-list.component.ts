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
  colorChanger = '';
  message: string;
  
  

  ngOnInit() {
    this.myContentArray = [
      this.contentItem,
      this.contentItem2,
      this.contentItem3,
      this.contentItem4,
      this.contentItem5,
      this.contentItem6,
      this.contentItem7,
      this.contentItem8,
    ];
  }

  clickEvent() {
    this.movie = this.myContentArray.some(item => item.title.toLowerCase() === this.name.toLocaleLowerCase()); //remeber that title and name are being compared 
    if (this.movie === true) {
      this.colorChanger = 'green';
      this.message = 'This movie exists';
      
      return;
    } else {
      this.message = 'That movie does not exist';
      this.colorChanger = 'red';
    }
  }
}
