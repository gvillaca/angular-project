import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFornecedorComponent } from './form-fornecedor.component';

describe('FormFornecedorComponent', () => {
  let component: FormFornecedorComponent;
  let fixture: ComponentFixture<FormFornecedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFornecedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
