import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectViewComponent } from './project-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialogModule } from '@angular/material/dialog';
describe('ProjectViewComponent', () => {
    let component: ProjectViewComponent;
    let fixture: ComponentFixture<ProjectViewComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ ProjectViewComponent ],
        imports: [
            HttpClientTestingModule,
            RouterTestingModule,
            OverlayModule,
            MatDialogModule
        ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ProjectViewComponent);
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

    it('Sesion should Show the proper info', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.nativeElement.querySelector('#sesion');
      expect(el).not.toBe('');
    });
});
