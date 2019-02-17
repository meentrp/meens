import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeenComponent } from './meen.component';

describe('MeenComponent', () => {
  let component: MeenComponent;
  let fixture: ComponentFixture<MeenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
