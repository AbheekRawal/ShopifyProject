import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaymnetComponent } from './user-paymnet.component';

describe('UserPaymnetComponent', () => {
  let component: UserPaymnetComponent;
  let fixture: ComponentFixture<UserPaymnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPaymnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPaymnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
