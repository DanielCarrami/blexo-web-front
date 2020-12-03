import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSesionComponent } from './ver-sesion.component';

import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('VerSesionComponent', () => {
  let dialog:MatDialog;
  let component: VerSesionComponent;
  let fixture: ComponentFixture<VerSesionComponent>;

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
});
