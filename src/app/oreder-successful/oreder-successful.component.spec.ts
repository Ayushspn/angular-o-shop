import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrederSuccessfulComponent } from './oreder-successful.component';

describe('OrederSuccessfulComponent', () => {
  let component: OrederSuccessfulComponent;
  let fixture: ComponentFixture<OrederSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrederSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrederSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
