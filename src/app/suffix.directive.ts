import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[suffix]',
  standalone: true
})
export class SuffixDirective implements OnInit {
  @Input() suffix: string = ""

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.el.nativeElement.innerText += this.suffix
  }
  
  @HostListener("mouseover") onMouseOver() {
    this.el.nativeElement.style.color = "red"
  }

  @HostListener("mouseout") onMouseOut() {
    this.el.nativeElement.style.color = "inherit"
  }
}
