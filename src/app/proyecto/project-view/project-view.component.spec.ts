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
});
