import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPasionComponent } from './mi-pasion.component';

describe('MiPasionComponent', () => {
  let component: MiPasionComponent;
  let fixture: ComponentFixture<MiPasionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiPasionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiPasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
