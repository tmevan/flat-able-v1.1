import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisisatestmoduleComponent } from './thisisatestmodule.component';

describe('ThisisatestmoduleComponent', () => {
  let component: ThisisatestmoduleComponent;
  let fixture: ComponentFixture<ThisisatestmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisisatestmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisisatestmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
