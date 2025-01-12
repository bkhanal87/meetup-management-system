import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateeditmeetupComponent } from './createeditmeetup.component';

describe('CreateeditmeetupComponent', () => {
  let component: CreateeditmeetupComponent;
  let fixture: ComponentFixture<CreateeditmeetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateeditmeetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateeditmeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
