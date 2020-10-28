import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorOnlyOneLi]'
})
export class ColorOnlyOneLiDirective {

  @HostBinding('class.firstElementStyle') setClass:boolean; // LIGNE A RAJOUTER POUR LA METHODE 2

  constructor(private elRef:ElementRef, private renderer:Renderer2) {}
  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow'); METHODE 1 PERMA NO HOVER
  }
    @HostListener ('mouseenter') mouseEnterEvent (eventData:Event) {
      //this.renderer.setStyle(this.elRef.nativeElement, 'background', 'yellow'); METHODE 1 HOVER
      this.setClass = true; // METHODE 2 AVEC LIMPORT DE HOSTBINDING
    }
    @HostListener ('mouseleave') mouseLeaveEvent (eventData:Event) {
      //this.renderer.setStyle(this.elRef.nativeElement, 'background', 'transparent'); METHODE 1 HOVER
      this.setClass = false; // METHODE 2 AVEC LIMPORT DE HOSTBINDING

}
}
