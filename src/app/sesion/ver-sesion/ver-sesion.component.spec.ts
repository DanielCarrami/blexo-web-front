import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSesionComponent } from './ver-sesion.component';

import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import { EditarSesionComponent } from '../editar-sesion/editar-sesion.component';
import { ELOOP } from 'constants';
import { DebugElement } from '@angular/core';

import { By } from '@angular/platform-browser'
describe('VerSesionComponent', () => {
  let dialog:MatDialog;
  let component: VerSesionComponent;
  let fixture: ComponentFixture<VerSesionComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        MatDialogModule, 
        RouterTestingModule,
        HttpClientTestingModule ],
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

  it('should popup', () => {
    fixture.detectChanges();
    spyOn(component, "popup");
    let el = fixture.debugElement.nativeElement.querySelector('button');
    el.click();
    expect(component.popup).toHaveBeenCalled();
  });

  it('should Create Experiment', () => {
    fixture.detectChanges();
    spyOn(component, "crearExperimento");
    let el = fixture.debugElement.nativeElement.querySelector('#boton1');
    el.click();
    expect(component.crearExperimento).toHaveBeenCalled();
  });
});
