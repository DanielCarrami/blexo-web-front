import { Component, OnInit } from '@angular/core';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { MatDialog } from '@angular/material/dialog';
import { EditProjectComponent } from '../edit-project/edit-project.component';

// added provider
@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
  providers: [MatDialog]
})
export class ProjectViewComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  nuevoProyecto(): void{
    this.dialog.open(CreateProjectComponent, {
      width: '450px'
    });
  }

  editarProyecto(): void{
    this.dialog.open(EditProjectComponent, {
      width: '450px'
    });
  }
}
