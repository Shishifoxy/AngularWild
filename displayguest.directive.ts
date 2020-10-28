import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Directive({
  selector: '[appDisplayGuest]'
})
export class DisplayguestDirective {
  @Input() set appDisplayGuest(condition:boolean) {
    if(condition) {
        this.vwRef.createEmbeddedView(this.tplRef);
    } else {
        this.vwRef.clear();
    }
  }

  constructor(private tplRef:TemplateRef<any>, private vwRef:ViewContainerRef) { }

}
