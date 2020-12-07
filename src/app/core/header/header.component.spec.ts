import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { HeaderComponent } from './header.component';
import { MatMenuModule } from '@angular/material/menu';
describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
           MatDialogModule,
           HttpClientTestingModule,
           MatMenuModule
        ],
        declarations: [ HeaderComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('User Menu should pop', async () =>{ 
      fixture.debugElement.nativeElement.querySelector('#menu-button').click();
      fixture.detectChanges();
      let menu = fixture.nativeElement.querySelector('#mat-menu');
      expect(menu).toBeTruthy();
    });

    // it('editar-usuario should popup', () => {
    //   fixture.nativeElement.querySelector('#menu-button').click();
    //   // fixture.detectChanges();
    //   spyOn(component, 'openDialog');
    //   let button = fixture.nativeElement.parentNode.querySelector('#edit');
    //   button.click();
    //   // fixture.detectChanges();
    //   expect(component.openDialog).toHaveBeenCalled();
    // });

    // it('logout successful', async () => { 
    //   fixture.debugElement.nativeElement.querySelector('#menu-button').click();
    //   let menu = fixture.nativeElement.querySelector('#mat-menu');
    //   expect(menu).toBeTruthy();
    //   fixture.nativeElement.parentNode.querySelector('#logout').click();
    //   expect(
    //     fixture.nativeElement.parentNode.querySelector('button[routerLink="/iniciosesion"]')
    //     ).toBeTruthy();
    // });

});
