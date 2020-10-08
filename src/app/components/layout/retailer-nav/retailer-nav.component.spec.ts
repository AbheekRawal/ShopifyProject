import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerNavComponent } from './retailer-nav.component';

describe('RetailerNavComponent', () => {
  let component: RetailerNavComponent;
  let fixture: ComponentFixture<RetailerNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
