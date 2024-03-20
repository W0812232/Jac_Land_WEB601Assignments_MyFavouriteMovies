import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss',
})
export class CreateContentComponent {
  @Output() newMovieEvent = new EventEmitter<Content>();
  error='';
  newMovieItem: Content = {
    id: 0,
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: [],
  };
  addMovie(): void {

    
    
    let ourPromise = new Promise((success, fail) =>{
     
      if (this.newMovieItem.title !== ''){
        
        success(`Success was achieved! "${this.newMovieItem.title}"`);
        this.newMovieEvent.emit(this.newMovieItem);
      }
      else{
        fail("Failure :(");
        
        
      
      }
      })

      ourPromise.then(successResult => console.log(successResult))
      .catch(failResult => {this.error = failResult;
      });
      this.newMovieItem = { id: 0, title: '', description: '', creator: '', imgURL: '', type: '', tags: [] };
      this.error = '';

    
  }
}
