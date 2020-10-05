import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
  providers: [MatDialog]
})
export class EditProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
