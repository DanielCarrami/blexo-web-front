import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { InicioSesionComponent } from './inicio-sesion.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('InicioSesionComponent', () => {
    let component: InicioSesionComponent;
    let fixture: ComponentFixture<InicioSesionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ],
            declarations: [ InicioSesionComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InicioSesionComponent);
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

    it('the password should be hidden', () => {
        expect(component.hide).toEqual(true);
    });

    
    
});
