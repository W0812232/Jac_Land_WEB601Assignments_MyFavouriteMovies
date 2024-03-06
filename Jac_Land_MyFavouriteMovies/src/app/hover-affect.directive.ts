import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true,
})
export class HoverAffectDirective implements OnInit {
  @Input () colour: string;

  constructor(private elm: ElementRef) {
  }
  ngOnInit(): void{ 
    this.elm.nativeElement.style.textDecoration =
    "none";
  }
  @HostListener('mouseover') onHover() {
    if(this.colour == 'blue') {
      this.elm.nativeElement.style.textDecoration = 'underline';
  }
    else {
    this.elm.nativeElement.style.fontWeight = 'bold';
    }
  }
    @HostListener('mouseleave') onUnHover() {
      this.elm.nativeElement.style.textDecoration = 'none';
      this.elm.nativeElement.style.fontWeight = 'normal';
}
}