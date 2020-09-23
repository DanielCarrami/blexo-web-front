import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentoViewComponent } from './experimento-view.component';

describe('ExperimentoViewComponent', () => {
  let component: ExperimentoViewComponent;
  let fixture: ComponentFixture<ExperimentoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
