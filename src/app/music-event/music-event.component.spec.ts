import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicEventComponent } from './music-event.component';

describe('MusicEventComponent', () => {
  let component: MusicEventComponent;
  let fixture: ComponentFixture<MusicEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
