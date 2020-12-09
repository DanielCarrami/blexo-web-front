import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisProyectosComponent } from './mis-proyectos.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';

describe('MisProyectosComponent', () => {
  let component: MisProyectosComponent;
  let fixture: ComponentFixture<MisProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            HttpClientTestingModule,
            MatDialogModule
         ],
      declarations: [ MisProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Create Project', () => {
    fixture.detectChanges();
    spyOn(component, "nuevoProyecto");
    let el = fixture.debugElement.nativeElement.querySelector('#boton');
    el.click();
    expect(component.nuevoProyecto).toHaveBeenCalled();
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
});
