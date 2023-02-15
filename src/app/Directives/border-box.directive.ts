import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[BGColor]'
})
export class BorderBoxDirective implements OnChanges {


 @Input('BGColor') mouseOutColor:string="yellow";

  constructor(private elem:ElementRef) { 

  }

  ngOnChanges(): void {
    this.elem.nativeElement.style.backgroundColor=` ${this.mouseOutColor}`;
  }

@HostListener('mouseover') mouseoverFunc(){
  this.elem.nativeElement.style.boxShadow=`0px 1px 4px gray , 0px 0px 0px 3px gray`;
  this.elem.nativeElement.style.borderRadius=`10px`;
  this.elem.nativeElement.style.backgroundColor = ` ${this.mouseOutColor}`
}

@HostListener('mouseout') mouseoutFunc(){
  this.elem.nativeElement.style.boxShadow=`6px 6px 6px gray,-2px -1px 6px 10px gray `;
  this.elem.nativeElement.style.borderRadius=`2px`;
  this.elem.nativeElement.style.backgroundColor = `yellow`
}

}
