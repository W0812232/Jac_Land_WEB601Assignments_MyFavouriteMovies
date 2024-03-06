import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {
    
  @Output() newBandEvent = new EventEmitter<Content>();
  newBandItem: Content;
  addBand(): void{
  this.newBandEvent.emit(this.newBandItem);
  }
  

}
