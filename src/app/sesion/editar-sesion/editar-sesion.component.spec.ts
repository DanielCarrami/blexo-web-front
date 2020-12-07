import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSesionComponent } from './editar-sesion.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
describe('EditarSesionComponent', () => {
    let component: EditarSesionComponent;
  let fixture: ComponentFixture<EditarSesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          RouterTestingModule,
          MatDialogModule 
        ],
      declarations: [ EditarSesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
