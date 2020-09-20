import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSesionComponent } from './ver-sesion.component';

import {MatDialogModule} from '@angular/material/dialog';
describe('VerSesionComponent', () => {
  let component: VerSesionComponent;
  let fixture: ComponentFixture<VerSesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerSesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
