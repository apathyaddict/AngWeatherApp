import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCompComponent } from './input-comp.component';

describe('InputCompComponent', () => {
  let component: InputCompComponent;
  let fixture: ComponentFixture<InputCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
