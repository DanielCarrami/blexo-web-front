import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { CreateProjectComponent } from './create-project.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing';

describe('CreateProjectComponent', () => {
    let controller: ApolloTestingController;
    let component: CreateProjectComponent;
    let fixture: ComponentFixture<CreateProjectComponent>;

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
        declarations: [ CreateProjectComponent ]
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
      fixture = TestBed.createComponent(CreateProjectComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      controller = TestBed.get(ApolloTestingController);
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
});
