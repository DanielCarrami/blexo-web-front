import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSesionComponent } from './crear-sesion.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
describe('CrearSesionComponent', () => {
  let component: CrearSesionComponent;
  let fixture: ComponentFixture<CrearSesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule 
    ],
    providers: [
      { provide: MAT_DIALOG_DATA, useValue: {} },
      { provide: MatDialogRef, useValue: {} }
  ],
      declarations: [ CrearSesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should create sesion', () => {
    fixture.detectChanges();
    spyOn(component, "crearsesion");
    let el = fixture.debugElement.nativeElement.querySelector('#button');
    el.click();
    expect(component.crearsesion).toHaveBeenCalled();
  });

  it('Should fill form', () => {
    fixture.detectChanges();
    spyOn(component, "crearsesion");
    let el = fixture.debugElement.nativeElement.querySelector('#button');
    component.sesionnueva["nombre"] = "pedrito";
    component.sesionnueva["edad"] = 22;
    component.sesionnueva["descripcion"] = "prueba";
    component.sesionnueva["sexo"] = "M";
    el.click();
    expect(component.crearsesion).toHaveBeenCalled();
  });

  it('Correct Form', () => {
    fixture.detectChanges();
    spyOn(component, "pruebascorrecto");
    let el = fixture.debugElement.nativeElement.querySelector('#button');
    component.sesionnueva["nombre"] = "pedrito";
    component.sesionnueva["edad"] = 22;
    component.sesionnueva["descripcion"] = "prueba";
    component.sesionnueva["sexo"] = "M";
    el.click();
    expect(component.pruebascorrecto).toHaveBeenCalled();
  });

  it('Incorrect Form', () => {
    fixture.detectChanges();
    spyOn(component, "pruebasincorrecto");
    let el = fixture.debugElement.nativeElement.querySelector('#button');
    component.sesionnueva["nombre"] = "";
    component.sesionnueva["edad"] = 0;
    component.sesionnueva["descripcion"] = "";
    component.sesionnueva["sexo"] = "";
    el.click();
    expect(component.pruebasincorrecto).toHaveBeenCalled();
  });

});
