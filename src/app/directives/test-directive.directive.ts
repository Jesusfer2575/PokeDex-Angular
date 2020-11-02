import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';
import { Images } from './../interfaces/pokemon';

@Directive({
  selector: '[TestDirective]'
})
export class TestDirective {

  // @Input() TestDirective: boolean;
  @Input('imageInput') imageInput: Images;
  @HostListener('mouseenter') onMouseEnter() {
    const { front_shiny } = this.imageInput;
    this.changeSprite(front_shiny);
  }

  @HostListener('mouseleave') onMouseLeave() {
    const { front_default } = this.imageInput;
    this.changeSprite(front_default);
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
