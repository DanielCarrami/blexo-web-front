import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerExperimentoComponent } from './ver-experimento.component';

describe('VerExperimentoComponent', () => {
  let component: VerExperimentoComponent;
  let fixture: ComponentFixture<VerExperimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerExperimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerExperimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
