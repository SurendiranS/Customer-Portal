import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleOrderdataComponent } from './sale-orderdata.component';

describe('SaleOrderdataComponent', () => {
  let component: SaleOrderdataComponent;
  let fixture: ComponentFixture<SaleOrderdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleOrderdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleOrderdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
