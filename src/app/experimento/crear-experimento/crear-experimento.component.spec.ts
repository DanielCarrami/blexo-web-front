import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearExperimentoComponent } from './crear-experimento.component';

describe('CrearExperimentoComponent', () => {
  let component: CrearExperimentoComponent;
  let fixture: ComponentFixture<CrearExperimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearExperimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearExperimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
