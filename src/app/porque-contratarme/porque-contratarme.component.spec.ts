import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorqueContratarmeComponent } from './porque-contratarme.component';

describe('PorqueContratarmeComponent', () => {
  let component: PorqueContratarmeComponent;
  let fixture: ComponentFixture<PorqueContratarmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorqueContratarmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorqueContratarmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
