import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExperimentoComponent } from './editar-experimento.component';

describe('EditarExperimentoComponent', () => {
  let component: EditarExperimentoComponent;
  let fixture: ComponentFixture<EditarExperimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarExperimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarExperimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
