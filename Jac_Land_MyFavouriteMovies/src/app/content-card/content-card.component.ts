import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { HoverAffectDirective } from '../hover-affect.directive';
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule, HoverAffectDirective],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss',
})
export class ContentCardComponent implements OnInit {
  @Input() content: Content;

  doAlert(name: any, name2: any) {
    console.log('ID:', name, 'Title:', name2);
  }
  constructor() {}

  ngOnInit() {}
}
