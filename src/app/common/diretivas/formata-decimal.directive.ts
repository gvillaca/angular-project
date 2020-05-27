import { Directive, HostListener, Input, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[ngModel][decimalMask]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormataDecimalDirective,
      multi: true
    }
  ]
})
export class FormataDecimalDirective {

  private _disabled = false;
  onTouched: any;
  onChange: any;

  @Input('decimalMask') kzMask: string;
  //@Input('disabled') disabled = false;
  @Input() ngModel;
  @Output() ngModelChange = new EventEmitter();
  @Output() decimalChange = new EventEmitter();

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @Input()
  set disabled(disabled) {
    this._disabled = disabled;
    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', disabled);
  }

  writeValue(value: any): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', this._disabled);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('focus', ['$event'])
  onFocus($event: any) {
    this.onKeyup($event);
  }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    if ($event.target.value == "" || $event.target.value == null) {
      return;
    }
    var valor = $event.target.value.replace(/\D/g, '');
    var pad = this.kzMask.replace(/\D/g, '').replace(/9/g, '_');
    var valorMask = pad.substring(0, pad.length - valor.length) + valor;

    if ($event.keyCode === 9) {
      console.log("tab hited")
      this.onChange(valor);
      valor = "";
      return;
    }
    // retorna caso pressionado backspace
    if ($event.keyCode === 8) {
      if (valor == "") {
        this.decimalChange.emit("");
      } else {
        let valorDecimal = $event.target.value.replace(".", "");
        valorDecimal = valorDecimal.replace(",", ".");
        this.decimalChange.emit(valorDecimal);
      }
      this.onChange(valor);
      return;
    }

    var valorMaskPos = valorMask.length - 1;
    valor = '';
    for (var i = this.kzMask.length - 1; i >= 0; i--) {
      if (isNaN(parseInt(this.kzMask.charAt(i)))) {
        valor = this.kzMask.charAt(i) + valor;
      } else {
        valor = valorMask[valorMaskPos--] + valor;
      }
    }

    var valorSemZerosEsquerda = '';
    for (var i = 0; i < valor.length; i++) {
      if (valor[i] == "0" || valor[i] == ".") {
        valorSemZerosEsquerda += "_";
      } else if (valor[i] != "_") {
        break;
      } else {
        valorSemZerosEsquerda += valor[i];
      }
    }
    valorSemZerosEsquerda += valor.substring(valorSemZerosEsquerda.length, valor.length);

    var commaPosition = valorSemZerosEsquerda.indexOf(',');
    var valorFinal = '';
    for (var i = valorSemZerosEsquerda.length - 1; i >= 0; i--) {
      if (i == commaPosition && valorSemZerosEsquerda[i - 1] == "_") {
        valorFinal = '0,' + valorFinal;
        break;
      } else if (i < commaPosition && (valorSemZerosEsquerda[i] == "_")) {
        break;
      } else if (valorSemZerosEsquerda[i] != '_') {
        valorFinal = valorSemZerosEsquerda[i] + valorFinal;
      } else {
        valorFinal = '0' + valorFinal;
      }
    }

    let valorDecimal = valorFinal.replace(".", "");
    valorDecimal = valorDecimal.replace(".", "");
    valorDecimal = valorDecimal.replace(",", ".");
    this.decimalChange.emit(valorDecimal);

    this.ngModelChange.emit(valorFinal);
    $event.target.value = valorFinal;
  }


}