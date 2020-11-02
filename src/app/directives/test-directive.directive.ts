import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';
import { ResponseSinglePokemon } from './../interfaces/pokemon';

@Directive({
  selector: '[TestDirective]'
})
export class TestDirective {

  // @Input() TestDirective: boolean;
  @Input('imageInput') imageInput: ResponseSinglePokemon;
  @HostListener('mouseenter') onMouseEnter() {
    const { sprites } = this.imageInput;
    this.changeSprite(sprites.front_shiny);
  }

  @HostListener('mouseleave') onMouseLeave() {
    const { sprites } = this.imageInput;
    this.changeSprite(sprites.front_default);
  }

  constructor(
    public el: ElementRef,
    public renderer: Renderer2
  ) { }

  ngOnInit() {
    // if (this.TestDirective)
    //   this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }

  changeSprite(sprite: string) {
    this.renderer.setAttribute(this.el.nativeElement, 'src', sprite);
    // console.log(sprite); 
  }
}
