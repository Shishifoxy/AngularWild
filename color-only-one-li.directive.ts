import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorOnlyOneLi]'
})
export class ColorOnlyOneLiDirective {

  @HostBinding('class.test') private isHovering:boolean; 

  constructor(private elRef:ElementRef, private renderer:Renderer2) {}
  ngOnInit() {}

    @HostListener ('mouseover') onMouserOver() {
    
      this.isHovering = true; 
    }
    @HostListener ('mouseout') onmouseout() {
    
      this.isHovering = false; 
}
}
