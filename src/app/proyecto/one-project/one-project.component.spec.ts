import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneProjectComponent } from './one-project.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';

describe('OneProjectComponent', () => {
  let component: OneProjectComponent;
  let fixture: ComponentFixture<OneProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            HttpClientTestingModule,
            MatDialogModule
         ],
      declarations: [ OneProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Edit Project', () => {
    fixture.detectChanges();
    spyOn(component, "editarProyecto");
    let el = fixture.debugElement.nativeElement.querySelector('#boton2');
    el.click();
    expect(component.editarProyecto).toHaveBeenCalled();
  });

  it('Project name should Show the proper info', () => {
    fixture.detectChanges();
    let el = fixture.debugElement.nativeElement.querySelector('#nombre');
    expect(el).not.toBe('');
  });

  it('Descripcion should Show the proper info', () => {
    fixture.detectChanges();
    let el = fixture.debugElement.nativeElement.querySelector('#descripcion');
    expect(el).not.toBe('');
  });

  it('Fecha should Show the proper info', () => {
    fixture.detectChanges();
    let el = fixture.debugElement.nativeElement.querySelector('#fecha_inicio');
    expect(el).not.toBe('');
  });

  it('Sesion should Show the proper info', () => {
    fixture.detectChanges();
    let el = fixture.debugElement.nativeElement.querySelector('#sesion');
    expect(el).not.toBe('');
  });

  it('Session description should Show the proper info', () => {
    fixture.detectChanges();
    let el = fixture.debugElement.nativeElement.querySelector('#sesion_desc');
    expect(el).not.toBe('');
  });

  it('should Create Session', () => {
    fixture.detectChanges();
    spyOn(component, "crearSesion");
    let el = fixture.debugElement.nativeElement.querySelector('#boton3');
    el.click();
    expect(component.crearSesion).toHaveBeenCalled();
  });
});
