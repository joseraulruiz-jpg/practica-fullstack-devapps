import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoAjusteComponent } from './producto-ajuste.component';

describe('ProductoAjusteComponent', () => {
  let component: ProductoAjusteComponent;
  let fixture: ComponentFixture<ProductoAjusteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoAjusteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoAjusteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
