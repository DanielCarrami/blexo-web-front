import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

describe('RegistroComponent', () => {

  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule,
            RouterTestingModule
        ],
      declarations: [ RegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

  it('email should not be empty', () => {
    component.email.setValue('');
    expect(component.email.invalid).toBeTruthy();
  });

  it('email should have @', () => {
    component.email.setValue('prueba.com');
    expect(component.email.invalid).toBeTruthy();
  });

  it('email should have a dot', () => {
    component.email.setValue('prueba@hotmailcom');
    expect(component.email.valid).toBeTruthy();
  });

  it('email should have something after the dot', () => {
    component.email.setValue('prueba@hotmail.');
    expect(component.email.invalid).toBeTruthy();
  });

  it('email should be valid', () => {
    component.email.setValue('prueba@hotmail.com');
    expect(component.email.valid).toBeTruthy();
  });

  it('name should not be empty', () => {
    component.name.setValue('');
    expect(component.name.invalid).toBeTruthy();
  });

  it('name should have only letters', () => {
    component.name.setValue('Adsoft2');
    expect(component.name.invalid).toBeTruthy();
  });

  it('name should not accept special characters', () => {
    component.name.setValue('@dsoft');
    expect(component.name.invalid).toBeTruthy();
  });

  it('name should be accepted', () => {
    component.name.setValue('Adsoft');
    expect(component.name.valid).toBeTruthy();
  });

  it('lastname should not be empty', () => {
    component.lastname.setValue('');
    expect(component.lastname.invalid).toBeTruthy();
  });

  it('lastname should have only letters', () => {
    component.lastname.setValue('Sito23');
    expect(component.name.invalid).toBeTruthy();
  });

  it('lastname should not accept special characters', () => {
    component.lastname.setValue('Sito@');
    expect(component.lastname.invalid).toBeTruthy();
  });

  it('lastname should be accepted', () => {
    component.lastname.setValue('Sito');
    expect(component.lastname.valid).toBeTruthy();
  });

  it('phone should not be empty', () => {
    component.phone.setValue('');
    expect(component.phone.invalid).toBeTruthy();
  });

  it('phone should not accept letters', () => {
    component.phone.setValue('22S55A3980');
    expect(component.phone.invalid).toBeTruthy();
  });

  it('phone should not accept special characters', () => {
    component.phone.setValue('22$5543980');
    expect(component.phone.invalid).toBeTruthy();
  });

  it('phone should accept numbers', () => {
    component.phone.setValue('2225543980');
    expect(component.phone.valid).toBeTruthy();
  });

  it('the passwords should be hidden', () => {
    expect(component.hide).toEqual(true);
    expect(component.hideconfirm).toEqual(true);
  });

  it('the passwords should be the same', () => {
    component.password.setValue('contraseña');
    component.confirmpassword.setValue('contraseña');
    let button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.checkPasswords()).toBeTrue();
  });

});