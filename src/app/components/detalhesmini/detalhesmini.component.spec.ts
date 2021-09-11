import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesminiComponent } from './detalhesmini.component';

describe('DetalhesminiComponent', () => {
  let component: DetalhesminiComponent;
  let fixture: ComponentFixture<DetalhesminiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesminiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
