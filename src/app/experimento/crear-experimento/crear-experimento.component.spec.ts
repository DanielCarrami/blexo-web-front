import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearExperimentoComponent } from './crear-experimento.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing';

describe('CrearExperimentoComponent', () => {
    let controller: ApolloTestingController;
    let component: CrearExperimentoComponent;
    let fixture: ComponentFixture<CrearExperimentoComponent>;
    

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            HttpClientTestingModule,
            ApolloTestingModule
         ],
         providers: [
            { provide: MAT_DIALOG_DATA, useValue: {} },
            { provide: MatDialogRef, useValue: {} },

        ],
        declarations: [ CrearExperimentoComponent ]
      })
      .compileComponents();
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [ApolloTestingModule],
        });
    
        controller = TestBed.get(ApolloTestingController);
      });
    
      afterEach(() => {
        controller.verify();
      });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(CrearExperimentoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      controller = TestBed.get(ApolloTestingController);
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
});
