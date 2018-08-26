import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotLogComponent } from './shot-log.component';

describe('ShotLogComponent', () => {
  let component: ShotLogComponent;
  let fixture: ComponentFixture<ShotLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShotLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
