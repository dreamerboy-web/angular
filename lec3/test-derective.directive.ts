import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appTestDerective]'
})
export class TestDerectiveDirective{

  constructor(private componen: ElementRef) { }

  @Input() appTestDerective;

  @HostBinding('style.backgroundColor') bgs;

  @HostListener('mouseleave') colorizer() {
    this.bgs = this.appTestDerective
  }

  @HostListener('mouseenter') colorizerof() {
    this.bgs = "green"
  }

}
