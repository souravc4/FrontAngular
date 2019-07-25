import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitloanComponent } from './submitloan.component';

describe('SubmitloanComponent', () => {
  let component: SubmitloanComponent;
  let fixture: ComponentFixture<SubmitloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
