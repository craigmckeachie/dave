import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecedentDetailComponent } from './decedent-detail.component';

describe('DecedentDetailComponent', () => {
  let component: DecedentDetailComponent;
  let fixture: ComponentFixture<DecedentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecedentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecedentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
