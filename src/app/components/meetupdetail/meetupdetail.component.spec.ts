import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupdetailComponent } from './meetupdetail.component';

describe('MeetupdetailComponent', () => {
  let component: MeetupdetailComponent;
  let fixture: ComponentFixture<MeetupdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetupdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeetupdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
