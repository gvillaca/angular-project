import { Directive, ElementRef, HostListener, Output, EventEmitter, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input[cnpj]'
})
export class FormataCnpjDirective {

  @Output()
  onPressEnter: EventEmitter<any> = new EventEmitter();

  arrayFunction: any[] = [, "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]

  constructor(private _el: ElementRef, private _renderer: Renderer2) { }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {

    if (event.key == "Enter")
      this.onPressEnter.emit();

    else if (this.arrayFunction.indexOf(event.key) < 0)
      // alert(this._el.nativeElement);
      // this._renderer.setValue(this._el.nativeElement, this.convertToCpfCnpj(this._el.nativeElement.value));
    this._el.nativeElement.value = this.convertToCpfCnpj(this._el.nativeElement.value);
  }

  convertToCpfCnpj(num: any) {
    if (num) {
      num = num.toString();
      num = num.replace(/\D/g, "");

      switch (num.length) {
        case 4:
          num = num.replace(/(\d+)(\d{3})/, " $1.$2");
          break;
        case 5:
          num = num.replace(/(\d+)(\d{3})/, " $1.$2");
          break;
        case 6:
          num = num.replace(/(\d+)(\d{3})/, " $1.$2");
          break;
        case 7:
          num = num.replace(/(\d+)(\d{3})(\d{3})/, " $1.$2.$3");
          break;
        case 8:
          num = num.replace(/(\d+)(\d{3})(\d{3})/, " $1.$2.$3");
          break;
        case 9:
          num = num.replace(/(\d+)(\d{3})(\d{3})/, " $1.$2.$3");
          break;
        case 10:
          num = num.replace(/(\d+)(\d{3})(\d{3})(\d{1})/, " $1.$2.$3-$4");
          break;
        case 11:
          num = num.replace(/(\d+)(\d{3})(\d{3})(\d{2})/, " $1.$2.$3-$4");
          break;
        case 12:
          num = num.replace(/(\d+)(\d{3})(\d{3})(\d{4})/, " $1.$2.$3/$4");
          break;
        case 13:
          num = num.replace(/(\d+)(\d{3})(\d{3})(\d{4})(\d{2})/, " $1.$2.$3/$4-$5");
          break;
        case 14:
          num = num.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d+)/, " $1.$2.$3/$4-$5");
          break;
        case 15:
          num = num.replace(/(\d{3})(\d{3})(\d{3})(\d{4})(\d+)/, " $1.$2.$3/$4-$5");
          break;
      }
    }
    return num;
  }
}