import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCreditComponent } from './credit-credit.component';

describe('CreditCreditComponent', () => {
  let component: CreditCreditComponent;
  let fixture: ComponentFixture<CreditCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
