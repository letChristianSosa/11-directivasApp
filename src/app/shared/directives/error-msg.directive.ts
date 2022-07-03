import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[ErrorMsg]',
})
export class ErrorMsgDirective implements OnChanges {
  private _color: string = 'red';
  private _mensaje: string = 'Campo obligatorio';

  htmlElement: ElementRef<HTMLElement>;
  @Input() set color(valor: string) {
    this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
    this.setColor();
  }
  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(valor: boolean) {
    valor
      ? this.htmlElement.nativeElement.classList.remove('hidden')
      : this.htmlElement.nativeElement.classList.add('hidden');
  }
  // @Input() color: string = 'red';
  // @Input() mensaje: string = '';

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['mensaje']) {
    //   const mensaje = changes['mensaje'].currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }
    // if (changes['color']) {
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setClase();
  }

  setClase(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}
