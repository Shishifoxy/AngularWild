import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') myBackgroundColor:string; // LIGNE A RAJOUTER POUR LA METHODE 2

  constructor(private elRef:ElementRef, private renderer:Renderer2) {}
  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow'); METHODE 1 PERMA NO HOVER
  }
    @HostListener ('mouseenter') mouseEnterEvent (eventData:Event) {
      //this.renderer.setStyle(this.elRef.nativeElement, 'background', 'yellow'); METHODE 1 HOVER
      this.myBackgroundColor = 'yellow'; // METHODE 2 AVEC LIMPORT DE HOSTBINDING
    }
    @HostListener ('mouseleave') mouseLeaveEvent (eventData:Event) {
      //this.renderer.setStyle(this.elRef.nativeElement, 'background', 'transparent'); METHODE 1 HOVER
      this.myBackgroundColor = 'transparent'; // METHODE 2 AVEC LIMPORT DE HOSTBINDING
    }
  }

  